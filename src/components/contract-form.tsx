import { FC } from "react";
import Image from 'next/image'
import { HiSwitchHorizontal } from "react-icons/hi";

import solanaImg from '../../public/solana.svg'

export const ContractForm: FC = () => {
  return (
    <div className="w-full max-w-5xl h-2/4 flex flex-col items-center">
      <h1 className="text-4xl mb-4">Contract</h1>
      <div className="flex items-center justify-center">
        <div className="mx-20">
          <h2 className="text-blue-400 font-semibold">Client Wallet</h2>
          <input size={30} className="shadow-md font-bold p-2 border border-2 border-black rounded-2xl" placeholder="Wallet address" />
        </div>
        <HiSwitchHorizontal className="mt-6" size={30}/>
        <div className="mx-20 text-end">
          <h2 className="text-purple-500 font-semibold">Contractor Wallet</h2>
          <input size={30} className="shadow-md font-bold p-2 border border-2 border-black rounded-2xl" placeholder="Wallet address" />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full h-full mt-6 p-2 shadow-lg border-2 border-black rounded">
        <div>
          <h2 className="mb-2 underline underline-offset-2 decoration-2 font-semibold">Compensation</h2>
          <div className="w-4 relative">
            <input type={"number"} min={1} className="font-bold p-2 pl-8 border border-2 border-black rounded-2xl" placeholder="SOL" />
            <Image src={solanaImg} width={20} height={20} alt="" className="absolute left-2 top-4"/>
          </div>
          <div>
            <h3 className="text-sm mb-2 font-semibold mt-2">Other Assets</h3>
            <button className="bg-slate-200 text-5xl p-2 pb-4 w-20 h-20 shadow border border-black hover:bg-slate-300 hover:border-2">+</button>
          </div>
        </div>
        <div className="border-l-4 border-spacing-x-2 border-black text-end">
          <h2 className="mb-2 underline underline-offset-2 decoration-2 font-semibold">Deliverables</h2>
          <div className="w-full h-full relative">
            <textarea className="w-5/6 h-4/5 p-1 border-2 border-black" />
            <button className="absolute right-6 bottom-14 bg-black text-white rounded p-1 text-sm border-2 border-transparent hover:border-2 hover:border-sky-200">Enlarge</button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <button className="text-white font-bold bg-purple-500 p-2 px-5 rounded-2xl drop-shadow-md">Save Draft</button>
        <button className="text-white font-bold bg-green-500 p-2 px-5 rounded-2xl drop-shadow-md">Send</button>
      </div>
    </div>
  );
}