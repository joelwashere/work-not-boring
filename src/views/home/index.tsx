
import { FC, useState } from "react";
import { Navbar } from "../../components/navbar";
import { About } from "../../components/about";
import { Landing } from "../../components/landing";
import { ContactUs } from "../../components/contactus";
import { Footer } from "../../components/footer";
import { Author } from "../../components/author";

export const HomeView: FC = ({ }) => {

  const [page, setPage] = useState(false);

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}