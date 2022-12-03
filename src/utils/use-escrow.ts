import { useAnchorWallet } from "@solana/wallet-adapter-react";
import * as anchor from '@project-serum/anchor';

import { Commitment, Connection } from "@solana/web3.js";

export async function InitializeEscrow() {

  const wallet = useAnchorWallet();

  if (!wallet)
    return;

  const commitment: Commitment = 'processed';
  const connection = new Connection('https://api.devnet.solana.com', { commitment, wsEndpoint: 'wss://api.devnet.solana.com/' });
  const options = anchor.Provider.defaultOptions();
  const provider = new anchor.Provider(connection, wallet, options);
  //const program = new Program(idl, idl.metadata.address, provider);

  try {
            
  } catch (err) {
    console.log(err);
  }

}
