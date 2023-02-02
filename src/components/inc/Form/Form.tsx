import { FC, ReactElement, ReactNode } from 'react'

// styles
import { StyledForm } from './form-styles'

export interface FormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'children'> {
    children: ReactNode
}

const Form: FC<FormProps> = ({ children, ...props }): ReactElement => {
    return <StyledForm className={props.className}>{children}</StyledForm>
}

export default Form
