import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
    showSidebar: boolean
    isDragging: boolean
}

const initialState: UIState = {
    showSidebar: false,
    isDragging: false,
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
    },
})

// Actions Creators
export const { onShowSidebar, onHideSidebar, onStartDragging, onEndDragging } = uiSlice.actions

// Reducers
export default uiSlice.reducer
