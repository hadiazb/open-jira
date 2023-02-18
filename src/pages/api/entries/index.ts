import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database'
import { Entry, IEntry } from '../../../../models'

type Data =
    | {
          message: string
      }
    | IEntry[]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Promise<void> {
    switch (req.method) {
        case 'GET':
            return getEntries(res)

        default:
            return res.status(400).json({ message: 'Endpoint no existe' })
    }
}

const getEntries = async (res: NextApiResponse<Data>): Promise<void> => {
    await db.connect()
    const entries = await Entry.find().sort({ createdAt: 'ascending' })

    await db.disconnect()

    return res.status(200).json(entries)
}
