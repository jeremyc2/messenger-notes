// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getSummary from '../../scripts/wikipedia'

type Data = {
  status: string
  summary?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(typeof req.query.topic === 'undefined') {
    res.status(422).json({status: 'failed'})
    return
  }

  const summary = await getSummary({topic: req.query.topic as string})
  res.status(200).json({status: 'success', summary})
}
