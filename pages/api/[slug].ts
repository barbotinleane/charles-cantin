import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { getImagesFromCategory } from '../../util/api';

export default async function getImages(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { slug } = req.query as { slug: string };
  try {
    const images = await getImagesFromCategory(slug);
    res.json({ images });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};