import { FC } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";

export const ContractForm: FC = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center">
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
      <div className="grid grid-cols-2 w-full mt-6 p-2 bg-slate-300 rounded">
        <div>
          <h2 className="mb-2 underline underline-offset-2 decoration-2 font-semibold">Compensation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="border-l-4 border-black text-end">
          <h2 className="mb-2 underline underline-offset-2 decoration-2 font-semibold">Deliverables</h2>
        </div>
      </div>
      <button className="text-white font-bold bg-green-500 mx-2 mt-10 p-2 px-5 rounded-2xl drop-shadow-md">Send</button>
    </div>
  );
}