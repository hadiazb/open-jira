import { ReactElement } from 'react'

import { ButtonStyled } from './default-styles'

export interface StyledType {
    outline?: boolean
    styledType?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'info'
        | 'danger'
        | 'light'
        | 'dark'
}

export interface DefaultButtonProps extends StyledType {
    text?: string
    type?: 'button' | 'submit' | 'reset'
    disabled: boolean
    children?: React.ReactNode
    className?: string
    onClick?: () => void
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
    text,
    type,
    children,
    disabled,
    styledType,
    onClick,
    outline,
    className,
    ...props
}): ReactElement => {
    return !children ? (
        <ButtonStyled
            className={className}
            onClick={onClick}
            disabled={!disabled}
            type={type}
            styledType={styledType}
            outline={outline}
            {...props}
        >
            {text}
        </ButtonStyled>
    ) : (
        <ButtonStyled
            className={className}
            onClick={onClick}
            disabled={!disabled}
            type={type}
            styledType={styledType}
            outline={outline}
            {...props}
        >
            {children}
        </ButtonStyled>
    )
}

export default DefaultButton
