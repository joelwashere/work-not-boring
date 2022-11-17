import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { Statbar } from "./statbar"
import { Ticker } from "./ticker"

export const Layout = ({ children }: any) => {
    return (
      <>
        <div className="h-screen overflow-hidden">
          <Navbar />
          <Ticker />
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )
  }