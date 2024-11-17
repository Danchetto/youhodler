import express from 'express';
import * as binanceController from '../controllers/binanceController';

const binanceRouter = express.Router();

binanceRouter.get('/bitcoin', binanceController.getBitcoinRate);

export default binanceRouter;
