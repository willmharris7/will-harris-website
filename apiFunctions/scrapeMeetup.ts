import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';
import meetupPuppetCode from './meetupPuppetCode';

const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;

export default async function scrapeMeetup(date: string, time: string, city: string) {
    const next_day = new Date(date);
    next_day.setDate(next_day.getDate() + 1);
    const next_day_iso = next_day.toISOString().split('T')[0];
    const meetupUrl = `https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&location=us--or--${city}&customStartDate=${date}T03%3A00%3A00-05%3A00&customEndDate=${next_day_iso}T03%3A59%3A59-04%3A00&distance=twentyFiveMiles`;
    const response = await fetch(`https://chrome.browserless.io/function?token=${BROWSERLESS_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            code: `export default ${meetupPuppetCode.toString()}`,
            context: { url: meetupUrl },
        }),
    });
    const html_json = await response.text();
    writeFileSync('response.json', html_json);
    const html_parsed = JSON.parse(html_json);
    const document = cheerio.load(html_parsed.data);
    return document('a[data-event-label="Event Card"]').map((_, a) => ({
        href: document(a).attr('href'),
        img: document(a).find('img').attr('src'),
        title: document(a).find('h3').text(),
        time: document(a).find('time').text(),
        group: document(a).find('div.flex-shrink.min-w-0.truncate').text(),
        attendees: document(a).find('span.ds2-m14.py-ds2-8').text()
    })).get();
}
