import { ReactElement, FC } from 'react'

// components
import { Typography } from '../..'

// models
import { Entry } from '../../../interfaces'

// styles
import { StyledCtrTask, StyledCtrTaskRow } from './cardEntry-styles'

export interface CardEntryProps extends Entry {
    other?: boolean
}

const CardEntry: FC<CardEntryProps> = ({ createAt, description }): ReactElement => {
    return (
        <StyledCtrTask>
            <StyledCtrTaskRow>
                <Typography variant="p" color="light">
                    Fecha:
                </Typography>

                <Typography variant="span" color="light">
                    {createAt}
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
        </StyledCtrTask>
    )
}

export default CardEntry
