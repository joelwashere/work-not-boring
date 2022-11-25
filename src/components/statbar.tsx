import { FC } from "react";

export const Statbar: FC = (props: any) => {
  return (
    <div className="invisible lg:visible absolute top-14">
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03E1FF] to-[#DC1FFF] rounded-lg blur-md opacity-70">
        </div>
        <div className="relative rounded-lg px-7 py-3 bg-black leading-none
          flex justify-center items-center divide-x divide-gray-600">
            <span className="pr-6 text-gray-100">wnb 0.8.3</span>
            <span className="pl-6 text-purple-100">
              <span className="text-lg font-semibold">1</span> Contracts Completed
            </span>
        </div>
      </div>
    </div>
  );
}