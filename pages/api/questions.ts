import fetch from 'node-fetch';

import { NextApiRequest, NextApiResponse } from 'next';

const createUrlRequest = (query: any) => {
  let queryUrl = '';
  const queryKeys = Object.keys(query);
  queryKeys.forEach((key) => (queryUrl = queryUrl + `&${key}=${query[key]}`));
  return queryUrl;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const { query } = req;

  const data = await fetch(
    `https://opentdb.com/api.php?type=multiple${createUrlRequest(query)}`
  );
  const questions = await data.json();
  res.json(questions);
};
