import type { VercelRequest, VercelResponse } from '@vercel/node';
import scrapeMeetup from '../apiFunctions/scrapeMeetup';
import scrapeEventbrite from '../apiFunctions/scrapeEventbrite';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { date, time, city, meetup, eventbrite } = req.query;
    if (meetup === "true") {
        const card_data_meetup = await scrapeMeetup(date as string, time as string, city as string);
        res.status(200).json(card_data_meetup);
    }
    if (eventbrite === "true") {
        const card_data_eventbrite = await scrapeEventbrite(date as string, time as string, city as string);
        res.status(200).json(card_data_eventbrite);
    } else {
        res.status(200)
    }
    
    
}
