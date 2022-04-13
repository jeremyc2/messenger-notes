// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getSummary from '../../scripts/wikipedia'

type Data = {
  status: string
  summary?: any
}

interface Options {
  exsentences?: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  var options: Options = {}

  if(typeof req.query.topic === 'undefined') {
    res.status(422).json({status: 'failed'})
    return
  }

  if(typeof req.query.sentences !== 'undefined' && 
    !Array.isArray(req.query.sentences)) {
    options.exsentences = parseInt(req.query.sentences)
  }

  const summary = await getSummary({topic: req.query.topic as string, options})
  res.status(200).json({status: 'success', summary})
}
