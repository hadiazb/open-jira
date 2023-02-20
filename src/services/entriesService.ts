import { AxiosResponse } from 'axios'
import { IEntry } from '../../models'
import { entriesApi } from '../apis'

export const getEntriesService = async (): Promise<AxiosResponse<IEntry[]>> => {
    return await entriesApi.get<IEntry[]>('/entries')
}

export const createEntryService = async (data: {
    name: string
    description: string
}): Promise<AxiosResponse<IEntry>> => {
    return await entriesApi.post<IEntry>('/entries', data)
}

export const updateEntryService = async (
    data: Omit<IEntry, 'createAt'>,
    id: string
): Promise<AxiosResponse<IEntry>> => {
    return await entriesApi.put<IEntry>(`/entries/${id}`, data)
}

export const deleteEntryService = async (id: string): Promise<AxiosResponse<IEntry>> => {
    return await entriesApi.delete<IEntry>(`/entries/${id}`)
}
