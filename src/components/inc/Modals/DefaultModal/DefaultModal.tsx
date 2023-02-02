import { ReactElement, FC } from 'react'

// styles
import {
    StyledModalCtr,
    StyledModalOverLite,
    StyledModalContent,
    StyledModalTop,
    CloseIcon,
} from './defaultModal-styles'

export interface DefaultModalProps {
    children: React.ReactNode
    showModal: boolean
    onClose: () => void
}

const DefaultModal: FC<DefaultModalProps> = ({ children, showModal, onClose }): ReactElement => {
    return (
        <StyledModalCtr showModal={showModal}>
            <StyledModalOverLite />
            <StyledModalContent>
                <StyledModalTop>
                    <CloseIcon size={40} onClick={onClose} />
                </StyledModalTop>
                {children}
            </StyledModalContent>
        </StyledModalCtr>
    )
}

export default DefaultModal
