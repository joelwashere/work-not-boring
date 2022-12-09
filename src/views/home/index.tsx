import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";

export const HomeView: FC = ({ }) => {

  const [page, setPage] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-r from-black via-slate-900 to-black">
      <div className="flex flex-col w-4/5 h-screen mx-auto">
        <div className="flex h-4/5 my-auto items-center justify-between">
          <div className="flex flex-col">
            <div className="text-white text-md md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
              Work Not Boring
              <span className="block pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-100">
                Send and Receive crypto with escrow protections
              </span>
            </div>
            <h3 className="p-2 text-xs md:text-xl text-white font-medium">
              Building blockchain solutions to make work easier for entrepreneurs and creatives
            </h3>
          </div>
          <div className="flex flex-col mr-24 text-center text-sm md:text-md 2xl:text-lg">
            <Link href="/contract" className="my-2 p-2 bg-white text-black font-bold rounded shadow-lg border-2 border-transparent hover:shadow-xl hover:border-black/50">Create a Contract</Link>
            <Link href="/" className="my-2 p-2 bg-blue-500 text-white font-bold rounded shadow-lg border-2 border-transparent hover:shadow-xl hover:border-black/50">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}