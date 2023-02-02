import { ReactElement, FC, useCallback, useEffect } from 'react'

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
    const body = document.querySelector('body')

    const disableScroll = useCallback((): void => {
        if (showModal && body) {
            body.style.overflowY = 'hidden'
        }
    }, [body, showModal])

    const enableScroll = useCallback((): void => {
        if (showModal && body) {
            body.style.overflowY = 'auto'
        }
    }, [body, showModal])

    useEffect(() => {
        disableScroll()

        return () => {
            enableScroll()
        }
    }, [disableScroll, enableScroll])

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
