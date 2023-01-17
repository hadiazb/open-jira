import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
    showSidebar: boolean
}

const initialState: UIState = {
    showSidebar: false,
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
    },
})

// Actions Creators
export const { onShowSidebar, onHideSidebar } = uiSlice.actions

// Reducers
export default uiSlice.reducer
