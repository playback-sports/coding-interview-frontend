// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Request extends NextApiRequest {
    body: {
        msElapsed: number;
        msRemaining: number;
    };
}

export default function handler(req: Request, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }

    const { msElapsed, msRemaining } = req.body;

    if (typeof msElapsed !== 'number' || typeof msRemaining !== 'number') {
        res.status(400).end();
        return;
    }

    res.status(204).end();
}
