const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;

import * as cheerio from 'cheerio';
export default async function scrapeEventbrite (date: string, time: string, city: string) {
    const urlEventbrite = `https://www.eventbrite.com/d/or--${city}/all-events/?page=1&start_date=${date}&end_date=${date}`
    const response = await fetch(`https://chrome.browserless.io/content?token=${BROWSERLESS_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            url: urlEventbrite,
            waitForTimeout: 5000,
        }),
    });
    const html_evenbrite = await response.text();
    return html_evenbrite
}