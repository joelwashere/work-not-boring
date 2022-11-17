import { FC } from "react";

export const Statbar: FC = (props: any) => {
  return (
    <div className="absolute top-14">
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03E1FF] to-[#DC1FFF] rounded-lg blur-md opacity-70">
        </div>
        <div className="relative rounded-lg px-7 py-4 bg-black leading-none
          flex justify-center items-center divide-x divide-gray-600">
            <span className="pr-6 text-gray-100">Work Not Boring 0.7.1</span>
            <span className="pl-6 text-purple-100">
              <span className="text-lg font-semibold">0</span> Contracts Completed
            </span>
        </div>
      </div>
    </div>
  );
}