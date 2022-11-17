import { FC, useState } from "react";
import { ContractForm } from "../../components/contract-form";
import { ContractList } from "../../components/contract-list";
import { Statbar } from "../../components/statbar";

export const HomeView: FC = ({ }) => {

  const [page, setPage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-50 via-slate-200 to-sky-50">
      <Statbar />
      <div className="relative">
        <button className="absolute right-0 bottom-0 text-white font-bold bg-sky-500
           p-2 px-5 rounded-2xl drop-shadow-md hover:text-gray-800" onClick={() => {setPage(!page)}}>
            {page === false ? "Show Contracts" : "Create New Contract"}
        </button>
        {!page ? <ContractForm /> : <ContractList />}
      </div>
    </div>
  );
}