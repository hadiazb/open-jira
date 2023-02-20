import { useDispatch } from 'react-redux'

// models
import { AppDispatch } from '../store/store'

export const useDispatchApp = (): AppDispatch => {
    const dispatch: AppDispatch = useDispatch()
    return dispatch
}
