import { Footer } from "./footer"
import { Navbar } from "./navbar"

export const Layout = ({ children }: any) => {
    return (
      <>
        <div className="h-screen overflow-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )
  }