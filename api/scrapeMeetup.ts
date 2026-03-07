import type { VercelRequest, VercelResponse } from '@vercel/node';

const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { date, time, city } = req.query;
    const next_day = new Date(date as string)
    next_day.setDate(next_day.getDate() +1)
    const next_day_iso = next_day.toISOString().split('T')[0];
    const response = await fetch(`https://chrome.browserless.io/content?token=${BROWSERLESS_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: `https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&location=us--or--${city}&customStartDate=${date}T03%3A00%3A00-05%3A00&customEndDate=${next_day_iso}T03%3A59%3A59-04%3A00&distance=twentyFiveMiles`}),
    });
    const html = await response.text();
    res.status(200).send(html);
}


// https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&location=us--or--Portland&customStartDate=2026-03-07T03%3A00%3A00-05%3A00&customEndDate=2026-03-08T03%3A59%3A59-04%3A00&distance=twentyFiveMiles