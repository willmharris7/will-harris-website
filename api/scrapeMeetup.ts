import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';

const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { date, time, city } = req.query;
    const next_day = new Date(date as string)
    next_day.setDate(next_day.getDate() +1)
    const next_day_iso = next_day.toISOString().split('T')[0];
    const meetupUrl = `https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&location=us--or--${city}&customStartDate=${date}T03%3A00%3A00-05%3A00&customEndDate=${next_day_iso}T03%3A59%3A59-04%3A00&distance=twentyFiveMiles`;
    const response = await fetch(`https://chrome.browserless.io/function?token=${BROWSERLESS_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            code: `export default async ({ page, context }) => {
                await page.goto(context.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
                await page.waitForSelector('a[data-event-label="Event Card"]');
                for (let i = 0; i < 5; i++) {
                    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
                    await new Promise(r => setTimeout(r, 500));
                }
                return { data: await page.content(), type: 'application/html' };
            }`,
            context: { url: meetupUrl },
        }),
    });
    const html_json = await response.text();
    writeFileSync('response.json', html_json);
    const html_parsed = JSON.parse(html_json)
    const document = cheerio.load(html_parsed.data);
    const card_data = document('a[data-event-label="Event Card"]').map((_, a) => ({
        href: document(a).attr('href'),
        img: document(a).find('img').attr('src'),
        title: document(a).find('h3').text(),
        time: document(a).find('time').text(),
        group: document(a).find('div.flex-shrink.min-w-0.truncate').text(),
        attendees: document(a).find('span.ds2-m14.py-ds2-8').text()
    })).get();
    res.status(200).json(card_data);
}


// https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&location=us--or--Portland&customStartDate=2026-03-07T03%3A00%3A00-05%3A00&customEndDate=2026-03-08T03%3A59%3A59-04%3A00&distance=twentyFiveMiles