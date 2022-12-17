import Link from "next/link";
import { FC } from "react"
import { HiChevronDown } from "react-icons/hi";
//[#aaa0a0]
export const Landing: FC = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-[#1a1a1d] via-[#1a1a1d] to-[#1a1a1d]">
      <div className="flex flex-col h-full my-auto">
        <div className="flex w-4/5 h-screen mx-auto pt-20">
          <div className="flex flex-col h-4/5 my-auto items-center justify-center text-center mx-auto">
            <div className="flex flex-col mb-10">
              <div className="text-[#90ccf4] text-md md:text-3xl lg:text-5xl 2xl:text-7xl font-semibold">
                <span className="block pb-4 text-[#f2f2f2]">
                  Providing business services with blockchain technology
                </span>
              </div>
              <p className="w-2/ mx-auto text-lg text-[#1a1a1d] font-semibold p-4 ">
                Enabling companies like yours to grow to new heights
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="absolute mb-20">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl text-[#f2f2f2] font-bold">Learn More</h3>
              <HiChevronDown size={30} color={"#f2f2f2"} className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}