import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { Statbar } from "./statbar"
import { Ticker } from "./ticker"

export const Layout = ({ children }: any) => {
    return (
      <div>
        {/* <Ticker /> */}
        <div>{children}</div>
        <Footer />
      </div>
    )
  }