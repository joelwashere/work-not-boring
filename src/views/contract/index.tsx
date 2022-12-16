import { FC, useState } from "react";

import { ContractForm } from "../../components/contract-form";
import { ContractList } from "../../components/contract-list";
import { Navbar } from "../../components/navbar";
import { Statbar } from "../../components/statbar";

export const ContractView: FC = ({ }) => {

  const [page, setPage] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#cdcdcd] via-[#cdc3cd] to-[#cdcdcd]">
        <Statbar />
        <div className="relative mt-20">
          {!page ? <ContractForm /> : <ContractList />}
          <button className="hidden md:block float-right text-white font-bold bg-sky-500
             p-2 px-5 mt-4 rounded-2xl drop-shadow-md hover:text-gray-800" onClick={() => {setPage(!page)}}>
              {page === false ? "Show Contracts" : "Create New Contract"}
          </button>
        </div>
      </div>
    </>
  );
}