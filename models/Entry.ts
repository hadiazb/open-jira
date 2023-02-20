import mongoose, { Model, Schema } from 'mongoose'

import { Entry } from '../src/interfaces'

export type IEntry = Entry

const entrySchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    createAt: { type: Number },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido',
        },
        default: 'pending',
    },
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel
