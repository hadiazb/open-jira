import { AppDispatch } from '../store'
import { getEntriesService } from '../../services'
import { onLoading, onError, onLoadEntries } from '.'

export const getEntriesAction = () => async (dispatch: AppDispatch) => {
    dispatch(onLoading())
    try {
        const { data } = await getEntriesService()
        dispatch(onLoadEntries(data))
    } catch (error) {
        dispatch(onError('Hay un error ni el macho'))
    }
}
