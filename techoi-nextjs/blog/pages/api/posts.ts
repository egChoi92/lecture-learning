import { getSortedPostsData } from "lib/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Date>
) {
    const allPostsData = getSortedPostsData();
    res.status(200).json(allPostsData)
}