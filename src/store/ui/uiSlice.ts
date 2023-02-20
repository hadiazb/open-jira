import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
    showSidebar: boolean
    isDragging: boolean
    showModalUpsert: boolean
}

const initialState: UIState = {
    showSidebar: false,
    isDragging: false,
    showModalUpsert: false,
}

export const uiSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        onShowSidebar: (state) => {
            state.showSidebar = true
        },
        onHideSidebar: (state) => {
            state.showSidebar = false
        },
        onStartDragging: (state) => {
            state.isDragging = true
        },
        onEndDragging: (state) => {
            state.isDragging = false
        },
        onShowModalUpsert: (state) => {
            state.showModalUpsert = true
        },
        onHireModalUpsert: (state) => {
            state.showModalUpsert = false
        },
    },
})

// Actions Creators
export const {
    onShowSidebar,
    onHideSidebar,
    onStartDragging,
    onEndDragging,
    onShowModalUpsert,
    onHireModalUpsert,
} = uiSlice.actions

// Reducers
export default uiSlice.reducer
