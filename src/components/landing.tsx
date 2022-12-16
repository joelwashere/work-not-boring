import Link from "next/link";
import { FC } from "react"

export const Landing: FC = () => {
  return (
    <section className="h-screen bg-[#aaa0a0]">
      <div className="flex w-4/5 h-screen mx-auto">
        <div className="flex flex-col h-4/5 my-auto items-center justify-center text-center mx-auto">
          <div className="flex flex-col mb-10">
            <div className="text-[#90ccf4] text-md md:text-3xl lg:text-5xl 2xl:text-7xl font-semibold">
              <span className="block pb-4 text-[#f2f2f2]">
                Providing business services with blockchain technology
              </span>
            </div>
            <p className="w-2/ mx-auto text-lg text-[#ffccbc] font-semibold p-4 ">
              Enabling companies like yours to grow to new heights
            </p>
          </div>
          <div className="flex text-xs md:text-sm 2xl:text-lg">
            <Link href="/contract" className="mx-2 p-2 bg-[#f2f2f2] text-black font-bold rounded shadow-lg border-2 border-transparent hover:shadow-xl hover:border-black/50">Create a Contract</Link>
            <Link href="/" className="mx-2 p-2 bg-[#90ccf4] text-white font-bold rounded shadow-lg border-2 border-transparent hover:shadow-xl hover:border-black/50">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}