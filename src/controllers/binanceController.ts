import { Request, Response } from 'express';
import { fetchBitcoinData } from '../services/binanceService';
import { setCache } from '../cache';

export const getBitcoinRate = async (req: Request, res: Response) => {
  try {
    const rate = await fetchBitcoinData();
    setCache(req, rate);
    res.status(200).json(rate);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: error });
    }
  }
};
