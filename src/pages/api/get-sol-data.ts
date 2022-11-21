import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useState } from 'react';

type ResponseData = {
  price: Number
}

const apiKey = "0ac51e33-41f2-414a-90c4-3301efbbce7c";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  let solPrice = 0;

  await axios.get("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
    { headers: { "X-CMC_PRO_API_KEY": apiKey }, params: { id: "5426" } })
  .then(res => {
    solPrice = res.data.data["5426"].quote.USD.price;
  }).catch(error => console.log(error))

  res.status(200).json({ price: solPrice });
}