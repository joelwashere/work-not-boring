import { FC, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const apiKey = "0ac51e33-41f2-414a-90c4-3301efbbce7c";
const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const Ticker: FC = () => {

  const { data, error } = useSWR("/api/get-sol-data", fetcher, { refreshInterval: 10000 });
  //const data = {price: 1};

  const [open, setOpen] = useState(false);
  const usdValue = useRef<HTMLInputElement>(null);
  const [convertedSolValue, setConvertedSolValue] = useState(0);

  useEffect(() => {
    if(usdValue.current !== null && Number(usdValue.current.value) === data?.price)
      usdValue.current.value = data?.price.toFixed(2).toString()
    usdToSol()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, data]);

  function usdToSol() {
    //Calculate the new SOL value using USD
    console.log("updated value");
    const newValue = Number(usdValue.current?.value);
    if(Number(usdValue.current?.value) !== NaN) {
      setConvertedSolValue(Number((newValue / data?.price).toFixed(3)));
    }
  }

  return (
    <div className="absolute top-14 left-10 rounded-xl min-w-fit bg-slate-900">
      <div>
        <p className="flex justify-between text-sm font-semibold py-0.5 px-2 text-transparent hover:cursor-pointer"
          onClick={() => setOpen(!open)}>
          <span className="bg-clip-text bg-gradient-to-r from-[#03E1FF] via-[#00FFA3] to-[#DC1FFF]">
            SOLUSD
          </span>
          <span className="mx-2 text-black">|</span>
          <span className="text-yellow-300">
            $ { data?.price.toFixed(2) }
          </span>
        </p>
        {open &&
          <div className="flex gap-1 text-sm justify-between mx-2">
            <label htmlFor="usdv" className="border-none rounded bg-clip-text text-center text-white" placeholder={convertedSolValue.toString()}>
              {convertedSolValue}
            </label>
            <input id="usdv" min={1} ref={usdValue} className="border-solid border-white border rounded bg-clip-text text-center text-white"
              size={7} placeholder="USD here!" onInput={() => {usdToSol()}}/>
          </div>
        }
      </div>
    </div>
  );
}