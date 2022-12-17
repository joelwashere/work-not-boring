import { FC, useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { HiSwitchHorizontal, HiQuestionMarkCircle } from "react-icons/hi";

import ethImg from '../../public/ethereum.svg'
import { toast } from "react-toastify";
import { initializeEscrow } from "../utils/use-escrow";

import { ethers } from "ethers";

export const ContractForm: FC = () => {

  //const provider = new ethers.providers.Web3Provider(window.ethereum)
  //const [walletAddress,  setWalletAddress] = useState<string>("");
//
  //const connectWallet = async () => {
  //  if(typeof window.ethereum !== "undefined") {
  //    await provider.send("eth_requestAccounts", []);
  //  }
  //}
//
  //connectWallet();
  //const signer = provider.getSigner()

  const [enlarged, setEnlarged] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const clientInputRef = useRef<HTMLInputElement>(null);
  const contractorInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onSwitchSide();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSwitchSide() {
    setIsClient(!isClient);
    console.log(isClient);
    //if(!walletAddress) setWalletAddress(await signer.getAddress());
    //if(isClient && clientInputRef.current) {
    //  clientInputRef.current.value = walletAddress ? walletAddress : "Could not find wallet";
    //  if(contractorInputRef.current) contractorInputRef.current.value = "";
    //}
    //else if(!isClient && contractorInputRef.current) {
    //  contractorInputRef.current.value = walletAddress ? walletAddress : "Could not find wallet";
    //  if(clientInputRef.current) clientInputRef.current.value = "";
    //}
  }

  function onClickSend() {
    //if(walletAddress && contractorInputRef.current && clientInputRef.current) {
    //  toast("Sending contract...");
    //  initializeEscrow();
    //} else {
    //  toast("Transaction failed. Wallet not connected.");
    //}
  }

  return (
    <div className="relative md:bg-[#eae3ea] text-white p-5 rounded shadow-lg">
      <div className="text-black w-full max-w-5xl md:h-2/4 flex flex-col items-center">
        {/** TODO: Implement tooltips for all elements that need them */}
        <h1 className="text-2xl md:text-3xl mb-4 w-fit p-2">
          Create Contract
        </h1>
        <div className={"flex flex-col md:flex-row items-center justify-center " + (isClient ? "" : "d")}>
          <div className="mx-10">
            <h2 className="font-semibold mb-1">Client Wallet</h2>
            <input ref={clientInputRef} size={30} readOnly={!isClient} className="text-black shadow-md font-bold p-2 border border-4 border-black rounded-2xl"
            placeholder="Wallet address / Username" />
          </div>
          <button className="bg-white mt-6 p-1 rounded-xl hover:text-slate-500" onClick={() => onSwitchSide()}><HiSwitchHorizontal size={30} /></button>
          <div className="mx-10 text-end relative">
            <h2 className="font-semibold mb-1">Contractor Wallet</h2>
            <input ref={contractorInputRef} size={30} readOnly={isClient} className="text-black shadow-md font-bold p-2 border border-4 border-black rounded-2xl"
            placeholder="Wallet address / Username" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full mt-6 p-4 shadow-lg border-2 border-black rounded">
          <div className="mx-auto">
            <h2 className="mb-2 underline underline-offset-2 decoration-2 font-semibold">Compensation</h2>
            <div className="w-4 relative">
              <input type={"number"} min={1} className="font-bold text-black p-2 pl-8 border border-4 border-black rounded-2xl w-52 md:min-w-max" placeholder="ETH" />
              <Image src={ethImg} width={20} height={20} alt="" className="absolute left-2 top-3"/>
            </div>
            <div>
              <h3 className="text-sm mb-2 font-semibold mt-2">Other Assets</h3>
              <button className="bg-white text-black text-5xl p-2 pb-4 w-20 h-20 shadow border-2 border-black hover:bg-slate-300 hover:border-4 rounded-xl">+</button>
            </div>
          </div>
          <div className="md:mx-auto my-7 md:mt-0">
            <h2 className="mb-2 underline underline-offset-2 decoration-2 font-semibold">Terms</h2>
            <div className={(!enlarged ? "relative " : "") + "flex w-full md:h-full max-h-96 md:max-h-full" + (!enlarged && "relative")}>
              <textarea cols={40} className={"text-black p-2 border-4 border-black z-10 rounded-xl resize-none" +
              (enlarged ? " w-2/4 h-5/6 enlarged" : " w-full h-full")} placeholder="Enter deliverables, etc..." />
              <button className={"absolute right-2 bottom-2 z-20 bg-black text-white rounded mx-2 md:mx-auto p-1 text-sm border-4 border-transparent hover:border-4 hover:border-sky-200"}
              onClick={() => setEnlarged(!enlarged)}>{!enlarged ? "Enlarge" : "Reduce"}</button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          {/** TODO: Implement save draft and send contract functionality */}
          <button className="text-white font-bold bg-purple-500 p-2 px-5 rounded-2xl drop-shadow-md hover:text-gray-800">Save Draft</button>
          <button className="text-white font-bold bg-green-500 p-2 px-5 rounded-2xl drop-shadow-md hover:text-gray-800" onClick={() => onClickSend()}>Send</button>
        </div>
      </div>
    </div>
  );
}