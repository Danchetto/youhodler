import axios from 'axios';
import addComission from '../utils/comission';
import config from "../config";

export const fetchBitcoinData = async () => {
  const apiUrl = config.BINANCE_API_URL;
  const params = { symbol: 'BTCUSDT' };

  const { data } = await axios.get(`${apiUrl}/api/v3/ticker/bookTicker`, {
    params,
  });

  const bidPrice = addComission(parseFloat(data.bidPrice));
  const askPrice = addComission(parseFloat(data.askPrice));
  const midPrice = (bidPrice + askPrice) / 2;

  return {
    symbol: data.symbol,
    bidPrice,
    bidPriceRaw: data.bidPrice,
    askPrice,
    askPriceRaw: data.askPrice,
    midPrice: midPrice.toFixed(4),
  };
};
