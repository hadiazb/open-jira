import { ReactElement, FC } from 'react'
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
    return (
        <StyledCtrTask>
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
                        {_id.split('-')[0]}
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
            <StyledCtrTaskRow>
                <StyledCtrTaskField>
                    <RemoveDarkIcon
                        size={20}
                        onClick={() => {
                            if (onDelete) {
                                onDelete({
                                    createAt,
                                    description,
                                    name,
                                    _id,
                                    status,
                                })
                            }
                        }}
                    />
                </StyledCtrTaskField>
            </StyledCtrTaskRow>
        </StyledCtrTask>
    )
}

export default CardEntry
