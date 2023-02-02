import { ReactElement, useState } from 'react'

// components
import { ModalForm } from '..'

// styles
import { StyledCtrHomeHeader, StyledCtrOptions, AddLightIcon } from './homeHeader-styles'

const HomeHeader = (): ReactElement => {
    const [showModal, setShowModal] = useState(false)

    const onClose = (): void => {
        setShowModal(false)
    }

    return (
        <StyledCtrHomeHeader>
            <StyledCtrOptions>
                <AddLightIcon
                    size={30}
                    onClick={() => {
                        setShowModal(true)
                    }}
                />
            </StyledCtrOptions>
            <ModalForm showModal={showModal} onClose={onClose} />
        </StyledCtrHomeHeader>
    )
}

export default HomeHeader
