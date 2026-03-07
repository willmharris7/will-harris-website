process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // remove later
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const response = await fetch('https://example.com');
    const html = await response.text();
    res.status(200).send(html);
}
