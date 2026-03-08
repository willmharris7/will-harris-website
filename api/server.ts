import type { VercelRequest, VercelResponse } from '@vercel/node';
import scrapeMeetup from '../apiFunctions/scrapeMeetup';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { date, time, city } = req.query;
    const card_data = await scrapeMeetup(date as string, time as string, city as string);
    res.status(200).json(card_data);
}
