import type { VercelRequest, VercelResponse } from '@vercel/node';

const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const response = await fetch(`https://chrome.browserless.io/content?token=${BROWSERLESS_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: 'https://www.meetup.com/home' }),
    });
    console.log(response)
    const html = await response.text();
    res.status(200).send(html);
}
