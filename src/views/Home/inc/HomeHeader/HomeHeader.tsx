import { ReactElement } from 'react'

// components
import { ModalForm } from '..'

// hooks
import { useDispatchApp } from '../../../../hooks'

// selectors
import { uiSelector, useSelector } from '../../../../selectors'

// actions
import { onShowModalUpsert, onHireModalUpsert } from '../../../../store/ui'

// styles
import { StyledCtrHomeHeader, StyledCtrOptions, AddLightIcon } from './homeHeader-styles'

const HomeHeader = (): ReactElement => {
    const dispatch = useDispatchApp()

    const { showModalUpsert } = useSelector(uiSelector)

    const onClose = (): void => {
        dispatch(onHireModalUpsert())
    }

    return (
        <StyledCtrHomeHeader>
            <StyledCtrOptions>
                <AddLightIcon
                    size={30}
                    onClick={() => {
                        dispatch(onShowModalUpsert())
                    }}
                />
            </StyledCtrOptions>
            <ModalForm showModal={showModalUpsert} onClose={onClose} />
        </StyledCtrHomeHeader>
    )
}

export default HomeHeader
