import { ReactElement, FC, useCallback, useEffect } from 'react'

// components
import { Portal } from '../..'

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
    hideOverlay?: boolean
    onClose: () => void
}

const DefaultModal: FC<DefaultModalProps> = ({
    children,
    showModal,
    onClose,
    hideOverlay,
}): ReactElement => {
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

    // handlers
    const onHire = (): void => {
        if (hideOverlay) {
            onClose()
        }
    }

    // listeners
    useEffect(() => {
        disableScroll()

        return () => {
            enableScroll()
        }
    }, [disableScroll, enableScroll])

    return (
        <Portal>
            <StyledModalCtr showModal={showModal}>
                <StyledModalOverLite onClick={onHire} hideOverlay={hideOverlay} />
                <StyledModalContent>
                    <StyledModalTop>
                        <CloseIcon size={40} onClick={onClose} />
                    </StyledModalTop>
                    {children}
                </StyledModalContent>
            </StyledModalCtr>
        </Portal>
    )
}

export default DefaultModal
