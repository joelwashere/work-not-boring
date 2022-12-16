import { FC } from "react";

export const About: FC = () => {

  return (
    <section className="flex flex-col bg-white pt-10 pb-20 px-8 text-xl lg:2xl">
      <p className="leading-tight max-w-5xl mx-auto tracking-tight text-3xl">
        <strong>We provide solutions to help businesses worldwide solve important problems </strong>
        <br />
        <br />
        Using Web 3 technology we deliver payroll
        and business analytics products built on Bitcoin.
      </p>
    </section>
  );
}