import { FC, useState } from "react";

import { ContractForm } from "../../components/contract-form";
import { ContractList } from "../../components/contract-list";
import { Statbar } from "../../components/statbar";

export const HomeView: FC = ({ }) => {

  const [page, setPage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black via-slate-900 to-black">
      <Statbar />
      <div className="relative">
        {!page ? <ContractForm /> : <ContractList />}
        <button className="float-right text-white font-bold bg-sky-500
           p-2 px-5 mt-4 rounded-2xl drop-shadow-md hover:text-gray-800" onClick={() => {setPage(!page)}}>
            {page === false ? "Show Contracts" : "Create New Contract"}
        </button>
      </div>
    </div>
  );
}