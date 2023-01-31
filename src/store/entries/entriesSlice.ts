import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// models
import { Entry } from '../../interfaces'

export interface EntriesState {
    entries: Entry[]
}

const initialState: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Esta es una prueba rapida para una tarea de tipo pendiente',
            status: 'pending',
            createAt: 1324543,
        },
        {
            _id: uuidv4(),
            description: 'Esta es una prueba rapida',
            status: 'in-progress',
            createAt: 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Esta es una prueba rapida',
            status: 'finished',
            createAt: 2500000,
        },
    ],
}

export const entriesSlice = createSlice({
    name: 'entries',
    initialState,
    reducers: {
        increment: (state) => {
            state.entries = []
        },
    },
})

// Actions Creators
export const { increment } = entriesSlice.actions

// Reducers
export default entriesSlice.reducer
