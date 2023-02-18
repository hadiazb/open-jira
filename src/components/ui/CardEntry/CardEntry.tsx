import { ReactElement, FC, DragEvent } from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'
import eoLocale from 'date-fns/locale/es'

// components
import { Typography } from '../..'

// models
import { Entry } from '../../../interfaces'

// styles
import {
    RemoveDarkIcon,
    StyledCtrTask,
    StyledCtrTaskField,
    StyledCtrTaskRow,
} from './cardEntry-styles'

// action
import { onStartDragging, onEndDragging } from '../../../store/ui'

export interface CardEntryProps extends Entry {
    onDelete?: (entry: Entry) => void
}

const CardEntry: FC<CardEntryProps> = ({
    createAt,
    description,
    name,
    status,
    _id,
    onDelete,
}): ReactElement => {
    const dispatch = useDispatch()

    const handleDelete = (): void => {
        if (onDelete) {
            onDelete({
                createAt,
                description,
                name,
                _id,
                status,
            })
        }
    }

    const onDragStart = (event: DragEvent<HTMLDivElement>): void => {
        event.dataTransfer.setData('id', _id)
        dispatch(onStartDragging())
    }

    const onDragEnd = (): void => {
        dispatch(onEndDragging())
    }

    return (
        <StyledCtrTask draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <StyledCtrTaskRow>
                <StyledCtrTaskField>
                    <Typography variant="p" color="light">
                        Name:
                    </Typography>
                    <Typography variant="span" color="light">
                        {name}
                    </Typography>
                </StyledCtrTaskField>
                <StyledCtrTaskField>
                    <Typography variant="p" color="light">
                        Id:
                    </Typography>
                    <Typography variant="span" color="light">
                        {_id.slice(0, 10)}...
                    </Typography>
                </StyledCtrTaskField>
            </StyledCtrTaskRow>
            <StyledCtrTaskRow>
                <Typography variant="p" color="light">
                    Fecha:
                    <Typography variant="span" color="light">
                        {format(createAt, "do 'de' MMMM yyyy", {
                            locale: eoLocale,
                        })}
                    </Typography>
                </Typography>
            </StyledCtrTaskRow>
            <StyledCtrTaskRow>
                <Typography variant="p" color="light">
                    Descripción:
                    <Typography variant="span" color="light">
                        {description}
                    </Typography>
                </Typography>
            </StyledCtrTaskRow>
            <StyledCtrTaskRow position="end">
                <StyledCtrTaskField width="100%" position="end">
                    <RemoveDarkIcon size={20} onClick={handleDelete} />
                </StyledCtrTaskField>
            </StyledCtrTaskRow>
        </StyledCtrTask>
    )
}

export default CardEntry
