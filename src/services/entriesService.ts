import { AxiosResponse } from 'axios'
import { IEntry } from '../../models'
import { entriesApi } from '../apis'

export const getEntriesService = async (): Promise<AxiosResponse<IEntry[]>> => {
    return await entriesApi.get<IEntry[]>('/entries')
}
