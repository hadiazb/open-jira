import { ReactElement, FocusEvent } from 'react'

import { useFocus } from './hooks/useFocus'

import { StyledInputContainer, StyledLabel, StyledInput } from './defaultInput-styles'
import { Typography } from '../..'

export interface DefaultInputProps {
    value: string
    name: string
    type?: 'password' | 'email' | 'search' | 'text' | 'url'
    label?: string
    className?: string
    onBlur: (event: string) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error: ErrorValidationProps
}

export interface ErrorValidationProps {
    message: string
    type?: string
}

const DefaultInput: React.FC<DefaultInputProps> = ({
    value,
    onChange,
    onBlur,
    name,
    type,
    label,
    error,
    className,
}): ReactElement => {
    const { focus, setFocus, handleOnBlur } = useFocus()

    return (
        <StyledInputContainer
            className={className}
            focused={focus}
            $isError={error.message.length > 0}
        >
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
                    onBlur(value)
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
