// services
import {
    getEntriesService,
    createEntryService,
    updateEntryService,
    deleteEntryService,
} from '../../services'

// actions
import { onLoading, onError, onLoadEntries, onAddEntry, onUpdateEntry, onDeleteEntry } from '.'

// models
import { IEntry } from '../../../models'
import { AppDispatch } from '../store'

export const getEntriesAction = () => async (dispatch: AppDispatch) => {
    dispatch(onLoading())
    try {
        const { data } = await getEntriesService()
        dispatch(onLoadEntries(data))
    } catch (error) {
        dispatch(onError('Hay un error ni el macho'))
    }
}

export const createEntryAction =
    (entry: { name: string; description: string }) => async (dispatch: AppDispatch) => {
        dispatch(onLoading())
        try {
            const { data } = await createEntryService(entry)
            dispatch(onAddEntry(data))
        } catch (error) {
            dispatch(onError('Hay un error ni el macho'))
        }
    }

export const updateEntryAction =
    (entry: Omit<IEntry, 'createAt'>, id: string) => async (dispatch: AppDispatch) => {
        dispatch(onLoading())
        try {
            const { data } = await updateEntryService(entry, id)
            dispatch(onUpdateEntry(data))
        } catch (error) {
            dispatch(onError('Hay un error ni el macho'))
        }
    }

export const deleteEntryAction = (id: string) => async (dispatch: AppDispatch) => {
    dispatch(onLoading())
    try {
        const { data } = await deleteEntryService(id)
        dispatch(onDeleteEntry(data))
    } catch (error) {
        dispatch(onError('Hay un error ni el macho'))
    }
}
