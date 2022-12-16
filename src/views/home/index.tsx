import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import { Navbar } from "../../components/navbar";
import { About } from "../../components/about";
import { Landing } from "../../components/landing";

export const HomeView: FC = ({ }) => {

  const [page, setPage] = useState(false);

  return (
    <>
      <Navbar />
      <Landing />
      <About />
    </>
  );
}