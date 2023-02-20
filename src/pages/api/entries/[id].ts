/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'

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
    const { id } = req.query
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'Id no valido' })
    }

    switch (req.method) {
        case 'GET':
            return getEntry(req, res)
        case 'PUT':
            return putEntry(req, res)
        case 'DELETE':
            return deleteEntry(req, res)
        default:
            return res.status(400).json({ message: 'Metodo no controlado' })
    }
}

const putEntry = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { description, name, status } = req.body
    const { id } = req.query

    try {
        await db.connect()
        const entryToUpdate = await Entry.findById(id)
        if (!entryToUpdate) {
            await db.disconnect()
            return res.status(400).json({ message: 'No existe' })
        }

        const updateEntry = await Entry.findByIdAndUpdate(
            id,
            { description, name, status },
            { runValidators: true, new: true }
        )
        await db.disconnect()
        return res.status(200).json(updateEntry!)
    } catch (error) {
        await db.disconnect()
        return res.status(400).json({ message: JSON.stringify(error) })
    }
}

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { id } = req.query
    try {
        await db.connect()
        const entryToDelete = await Entry.findById(id)
        if (!entryToDelete) {
            await db.disconnect()
            return res.status(400).json({ message: 'No existe' })
        }

        const deleteEntry = await Entry.findByIdAndDelete(id, { runValidators: true, new: true })
        await db.disconnect()
        return res.status(200).json(deleteEntry!)
    } catch (error) {
        await db.disconnect()
        return res.status(400).json({ message: JSON.stringify(error) })
    }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { id } = req.query
    try {
        await db.connect()
        const entryById = await Entry.findById(id)
        if (!entryById) {
            await db.disconnect()
            return res.status(400).json({ message: 'No existe' })
        }

        await db.disconnect()
        return res.status(200).json(entryById)
    } catch (error) {
        await db.disconnect()
        return res.status(400).json({ message: JSON.stringify(error) })
    }
}
