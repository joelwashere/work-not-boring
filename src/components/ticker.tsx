import { FC } from "react";

export const Ticker: FC = (props: any) => {
  return (
    <div className="absolute top-14 left-8 rounded-xl min-w-fit bg-black">
      <p className="text-sm font-semibold py-0.5 px-2 text-transparent">
      <span className="bg-clip-text bg-gradient-to-r from-[#03E1FF] via-[#00FFA3] to-[#DC1FFF]">SOLUSD</span>
      <span className="text-white"> | </span>
      <span className="text-yellow-300"> $ { false ? props.solprice : "0.00"}</span>
      </p>
    </div>
  );
}