import { ReactElement } from 'react'

import { useFocus } from './hooks/useFocus'

import { StyledInputContainer, StyledLabel, StyledInput } from './defaultInput-styles'
import { Typography } from '../..'

export interface DefaultInputProps {
    value: string
    name: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'password' | 'email' | 'search' | 'text' | 'url'
    label?: string
    error?: ErrorValidationProps
}

export interface ErrorValidationProps {
    message?: string
    type?: string
}

const DefaultInput: React.FC<DefaultInputProps> = ({
    value,
    onChange,
    name,
    type,
    label,
    error,
}): ReactElement => {
    const { focus, setFocus, handleOnBlur } = useFocus()

    return (
        <StyledInputContainer focused={focus} $isError={!!error?.message}>
            <StyledLabel htmlFor={name} focused={focus} $isError={!!error?.message}>
                {label}
            </StyledLabel>
            <StyledInput
                type={type || 'text'}
                name={name}
                onChange={onChange}
                value={value}
                className={'pl-2 bg-transparent outline-none'}
                onFocus={() => setFocus(true)}
                onBlur={() => {
                    handleOnBlur(value)
                }}
            />
            {error && (
                <Typography variant="span" color="danger">
                    {error.message}
                </Typography>
            )}
        </StyledInputContainer>
    )
}

export default DefaultInput
