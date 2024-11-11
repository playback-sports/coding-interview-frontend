// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import messages from '../../../static/chat.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }

    res.status(200).json(messages);
}
