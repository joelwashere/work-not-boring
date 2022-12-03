import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import bg from '../../../public/background.jpg'

export const HomeView: FC = ({ }) => {

  const [page, setPage] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <Image className="absolute -z-10" src={bg} alt={"A man working on his laptop"} />   
      <div className="flex flex-col w-4/5 h-screen mx-auto">
        <div className="flex h-4/5 my-auto items-center justify-between">
          <div className="flex flex-col">
            <div className="text-white text-6xl font-semibold">
              Work Not Boring
              <span className="block pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-100">
                Rebuilding work from the ground up.
              </span>
            </div>
            <h3 className="p-2 text-xl text-white font-medium">
              We build tools and services to make work simple, efficient, and less <span className="decoration-2 underline">boring</span>
            </h3>
          </div>
          <div className="flex flex-col mr-24 text-center">
            <Link href="/contract" className="my-2 p-2 bg-white text-black font-bold rounded shadow-lg border-2 border-transparent hover:shadow-xl hover:border-black/50">Create a Contract</Link>
            <Link href="/" className="my-2 p-2 bg-blue-500 text-white font-bold rounded shadow-lg border-2 border-transparent hover:shadow-xl hover:border-black/50">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}