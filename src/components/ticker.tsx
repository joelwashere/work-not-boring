import { FC, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const apiKey = "0ac51e33-41f2-414a-90c4-3301efbbce7c";
const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const Ticker: FC = () => {

  const { data, error } = useSWR("/api/get-sol-data", fetcher);

  /*
  useEffect(() => {
    axios.get("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
      {headers: {"X-CMC_PRO_API_KEY": apiKey}, params: {id: "5426"}})
    .then(res => {
      setPrice(res.data.data["5426"].quote.USD.price);
      console.log(res.data.data["5426"].quote.USD.price);
    }).catch(error => console.log(error))
  }, []);
  */

  return (
    <div className="absolute top-14 left-8 rounded-xl min-w-fit bg-black">
      <p className="text-sm font-semibold py-0.5 px-2 text-transparent">
      <span className="bg-clip-text bg-gradient-to-r from-[#03E1FF] via-[#00FFA3] to-[#DC1FFF]">SOLUSD</span>
      <span className="text-white"> | </span>
      <span className="text-yellow-300">
        $ { data?.price.toFixed(3) }
        </span>
      </p>
    </div>
  );
}