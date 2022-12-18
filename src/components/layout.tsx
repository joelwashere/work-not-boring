import { Author } from "./author"

export const Layout = ({ children }: any) => {
    return (
      <div>
        {/* <Ticker /> */}
        <div>{children}</div>
        <Author />
      </div>
    )
  }