import express, { Express } from 'express';
import binanceRouter from './routes/binance';
import config from './config';
import { checkCache } from './cache';

const app: Express = express();

const port = config.PORT;

app.use(express.json());
app.use(checkCache);
app.use('/binance', binanceRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at port ${port}`);
});
