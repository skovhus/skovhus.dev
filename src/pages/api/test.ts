import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  version: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ version: '2' })
}
