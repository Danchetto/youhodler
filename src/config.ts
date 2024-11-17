import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  UPDATE_FREQUENCY_SEC: +(process.env.UPDATE_FREQUENCY_SEC || 10),
  BINANCE_API_URL: process.env.BINANCE_API_URL || '',
  SERVICE_COMISSION: process.env.SERVICE_COMISSION || 0.01,
};

export default config;
