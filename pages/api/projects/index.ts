import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../Service/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    const query = AllProjects();

    const data = await client.fetch(query);

    res.status(200).json(data)
  }
}

export const AllProjects = () => {
    const query = '*[_type == "projects"]'
    return query
}
