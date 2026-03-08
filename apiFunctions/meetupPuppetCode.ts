const meetupPuppetCode = async ({ page, context }: { page: any, context: { url: string } }) => {
    await page.goto(context.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('a[data-event-label="Event Card"]');
    for (let i = 0; i < 2; i++) {
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await new Promise(r => setTimeout(r, 1000));
    }
    return { data: await page.content(), type: 'application/html' };
};

export default meetupPuppetCode;
