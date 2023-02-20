import { ReactElement, useMemo, FC } from 'react'

// components
import { CardEntry } from '..'

// interfaces
import { Entry } from '../../../interfaces'

// selectors
import { entriesSelector, useSelector } from '../../../selectors'

export interface ListCardsEntryProps {
    status: 'pending' | 'in-progress' | 'finished'
    onDelete?: (entry: Entry) => void
    onEdit?: (entry: Entry) => void
}

const ListCardsEntry: FC<ListCardsEntryProps> = ({ status, onDelete, onEdit }): ReactElement => {
    const { entries } = useSelector(entriesSelector)

    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries, status]
    )

    return (
        <>
            {entriesByStatus.map((entry) => (
                <CardEntry
                    key={entry._id}
                    onDelete={() => {
                        if (onDelete) {
                            onDelete(entry)
                        }
                    }}
                    onEdit={() => {
                        if (onEdit) {
                            onEdit(entry)
                        }
                    }}
                    {...entry}
                />
            ))}
        </>
    )
}

export default ListCardsEntry
