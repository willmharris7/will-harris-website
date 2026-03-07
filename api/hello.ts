import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    const { date, time, city } = req.query;
    res.status(200).json({ message: `You have selected ${date} and ${time} and ${city}` });
}