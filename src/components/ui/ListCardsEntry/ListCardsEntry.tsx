import { ReactElement, useMemo, FC } from 'react'

// components
import { CardEntry } from '..'

// selectors
import { entriesSelector, useSelector } from '../../../selectors'

export interface ListCardsEntryProps {
    status: 'pending' | 'in-progress' | 'finished'
}

const ListCardsEntry: FC<ListCardsEntryProps> = ({ status }): ReactElement => {
    const { entries } = useSelector(entriesSelector)

    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries, status]
    )

    return (
        <>
            {entriesByStatus.map((entry) => (
                <CardEntry key={entry._id} {...entry} />
            ))}
        </>
    )
}

export default ListCardsEntry
