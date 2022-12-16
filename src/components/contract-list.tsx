import { FC, ReactElement } from "react";

export const ContractList: FC = (props: any) => {

  function Contract(props: any) {
    return (
      <div className="flex flex-col p-2 border-2 border-white rounded">
        {props.picture}
        <span className="mb-2">{props.title}</span>
        <button className="text-white text-sm font-semibold bg-slate-700 p-1 px-2 rounded-2xl drop-shadow-md hover:text-gray-800">Actions</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 p-7 rounded">
    <div className="border-2 border-white p-4 mb-14 divide-y-2 divide-white rounded text-white">
      <h1 className="text-3xl font-bold w-fit p-2">
        Contracts
      </h1>
      <div className="grid auto-cols-auto md:grid-cols-4 gap-8 p-2 pt-4">
      </div>
    </div>
    </div>
  );
}