import { FC } from "react";

export const ContactUs: FC = () => {

  return (
    <section className="bg-[#1a1a1d] flex flex-col pt-10 pb-20 px-8 justify-center items-center text-white">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form className="flex flex-col gap-4 mt-10 px-10 lg:mt-14 min-w-full md:min-w-[500px] xl:min-w-[600px]">
        <input id="companyName" name="companyName" className="p-2 m-1 bg-black text-white outline-none border-2 border-white font-semibold rounded" placeholder="Company Name" type={"text"} />
        <input id="email" name="email" className="p-2 m-1 bg-black text-white outline-none border-2 border-white font-semibold rounded" placeholder="Email" type={"email"} />
        <textarea id="message" name="message" required maxLength={2048} className="p-2 m-1 bg-black text-white outline-none border-2 border-white font-semibold rounded min-h-[16em]" placeholder="Additional information" />
        <div className="text-center mt-4">
          <button type="submit" className="py-2 px-8 m-1 bg-white text-black font-semibold outline-none border-2 border-hidden border-green-300 hover:border-solid rounded">Submit</button>
        </div>
      </form>
    </section>
  );
}