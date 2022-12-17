import { FC } from "react";

export const About: FC = () => {

  return (
    <section className="flex flex-col bg-[#f2f2f2] pt-10 pb-20 px-8 text-xl lg:2xl">
      <p className="text-center leading-tight max-w-5xl mx-auto tracking-tight text-3xl">
        <strong>We provide solutions to help businesses worldwide solve important problems </strong>
        <br />
        <br />
        <p className="text-xl">
          Web 3 technologies are revolutionizing businesses by cutting out middle man,
          providing instant payment settlement, and smart contracts.
          <br />
          <br />
          <strong>Changing the way we do business forever.</strong>
        </p>
      </p>
    </section>
  );
}