import createSelector from '../createSelector'
import type { RootState } from '../../store/store'

export const entriesSelector = createSelector(
    (state: RootState) => state.entries,
    (entries) => entries
)
