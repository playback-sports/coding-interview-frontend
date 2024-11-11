// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    url: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }

    res.status(200).json({
        url: 'https://gcdn.playback.tv/nba_classics/dtc_classic_game_webanyama_debut_dal_vs_sas_102523_720p_crf17.mp4',
    });
}
