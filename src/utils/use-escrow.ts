import { AnchorWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

import * as anchor from '@project-serum/anchor';
import { Program } from "@project-serum/anchor";

import { toast } from "react-toastify";
import { createAssociatedTokenAccount, createMint, mintToChecked, TOKEN_PROGRAM_ID } from "@solana/spl-token";

const idl = require('../../public/escrow-idl.json');

export async function initializeEscrow(wallet: AnchorWallet, granteeKey: PublicKey) {

  //Sets up transaction
  if(!wallet) return;

  const connection = new anchor.web3.Connection("http://127.0.0.1:8899", "confirmed");
  const provider = new anchor.Provider(connection, wallet, {"preflightCommitment": "processed"});
  anchor.setProvider(provider);

  const program = new Program(idl, idl.metadata.address, provider);

  let initializerTokenAccountA: PublicKey;
  let granteeTokenAccountA: PublicKey;
  let vault_account_pda = null;
  let vault_account_bump = null;
  let vault_authority_pda = null;

  const amount = 100;

  const escrowAccount = anchor.web3.Keypair.generate();
  const payer = anchor.web3.Keypair.generate();
  const mintAuthority = anchor.web3.Keypair.generate();
  //const granteeMainAccount = anchor.web3.Keypair.generate();

  let mint: PublicKey;

  try {
    const airdropSignature = await connection.requestAirdrop(
      payer.publicKey,
      1 * LAMPORTS_PER_SOL
    );

    await connection.confirmTransaction(airdropSignature);

    // Fund Main Accounts
    await provider.send(
      (() => {
        const tx = new Transaction();
        tx.add(
          SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: wallet.publicKey,
            lamports: .1 * LAMPORTS_PER_SOL,
          }),
          SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: granteeKey,
            lamports: .1 * LAMPORTS_PER_SOL,
          })
        );
        return tx;
      })(),
      [payer]
    );

    mint = await createMint(
      connection, // conneciton
      payer, // fee payer
      mintAuthority.publicKey, // mint authority
      null, // freeze authority (you can use `null` to disable it. when you disable it, you can't turn it on again)
      0 // decimals
    );

    initializerTokenAccountA = await createAssociatedTokenAccount(connection, payer, mint, wallet.publicKey);
    granteeTokenAccountA = await createAssociatedTokenAccount(connection, payer, mint, granteeKey);
    
    {
      let txhash = await mintToChecked(
        connection, // connection
        payer, // fee payer
        mint, // mint
        initializerTokenAccountA, // receiver (sholud be a token account)
        mintAuthority, // mint authority
        amount, // amount. if your decimals is 8, you mint 10^8 for 1 token.
        0 // decimals
      );
    }

    //Initialize Escrow
    const [_vault_account_pda, _vault_account_bump] = await PublicKey.findProgramAddressSync(
      [Buffer.from(anchor.utils.bytes.utf8.encode("token-seed"))],
      program.programId
    );
    vault_account_pda = _vault_account_pda;
    vault_account_bump = _vault_account_bump;

    const [_vault_authority_pda, _vault_authority_bump] = await PublicKey.findProgramAddressSync(
      [Buffer.from(anchor.utils.bytes.utf8.encode("escrow"))],
      program.programId
    );
    vault_authority_pda = _vault_authority_pda;

    await program.methods.initialize(vault_account_bump, new anchor.BN(amount))
      .accounts({
        initializer: wallet.publicKey,
        vaultAccount: vault_account_pda,
        mint: mint,
        initializerDepositAccount: initializerTokenAccountA,
        granteeReceiveAccount: granteeTokenAccountA,
        escrowAccount: escrowAccount.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .preInstructions([await program.account.escrowAccount.createInstruction(escrowAccount)])
      .signers([escrowAccount, wallet])
      .rpc();

    let _vault = await connection.getAccountInfo(vault_account_pda);

    let _escrowAccount = await program.account.escrowAccount.fetch(
      escrowAccount.publicKey
    );
  } catch (err) {
    console.log(err);
    toast(err as string);
  }

  toast("Contract sent");

}

export async function cancelEscrow(wallet: AnchorWallet) {

  if(!wallet) return;
  
}

export async function distributeEscrow(wallet: AnchorWallet) {

  if(!wallet) return;

}
