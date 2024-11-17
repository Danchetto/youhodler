import express, {Express, Request, Response} from 'express';
import binanceRouter from './routes/binance';
import config from './config';
import { checkCache } from './cache';

const app: Express = express();

console.log(config);

const port = config.PORT;

app.use(express.json());
app.use(checkCache);
app.use('/binance', binanceRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
