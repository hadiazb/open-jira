import { FC, FormEventHandler, ReactElement, ReactNode } from 'react'

// styles
import { StyledForm } from './form-styles'

export interface FormProps {
    children: ReactNode
    className: string
    onSubmit?: FormEventHandler<HTMLFormElement> | undefined
}

const Form: FC<FormProps> = ({ children, className, onSubmit }): ReactElement => {
    return (
        <StyledForm onSubmit={onSubmit} className={className}>
            {children}
        </StyledForm>
    )
}

export default Form
