import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database'
import { Entry, IEntry } from '../../../../models'

type Data =
    | {
          message: string
      }
    | IEntry[]
    | IEntry

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Promise<void> {
    switch (req.method) {
        case 'GET':
            return getEntries(res)
        case 'POST':
            return postEntry(req, res)
        case 'PUT':
            return putEntry(req, res)
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

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { description, name } = req.body

    const newEntry = new Entry({
        description,
        name,
        createAt: Date.now(),
    })

    if (description && name) {
        try {
            await db.connect()
            await newEntry.save()
            await db.disconnect()
            return res.status(200).json(newEntry)
        } catch (error) {
            await db.disconnect()
            return res.status(500).json({ message: 'Algo salio mal' })
        }
    }

    return res.status(500).json({ message: 'Algo salio mal' })
}

const putEntry = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { description, name, status } = req.body

    if (description && name && status) {
        try {
            await db.connect()

            await db.disconnect()
            return res.status(200).json({ message: '' })
        } catch (error) {
            await db.disconnect()
            return res.status(500).json({ message: 'Algo salio mal' })
        }
    }

    return res.status(500).json({ message: 'Algo salio mal' })
}
