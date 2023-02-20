import { ReactElement, FC } from 'react'

// components
import { DefaultButton, DefaultModal, Typography } from '../../../../components'

// interfaces
import { Entry } from '../../../../interfaces'

// styles
import { ModalCtr, ModalCtrRow } from './modalDeleteTask-styles'

// actions
import { deleteEntryAction } from '../../../../store/entries'

// hooks
import { useDispatchApp } from '../../../../hooks'

// selectors
import { entriesSelector, useSelector } from '../../../../selectors'

export interface ModalDeleteTaskProps {
    entry: Entry | null
    showModal: boolean
    onClose: () => void
}

const ModalDeleteTask: FC<ModalDeleteTaskProps> = ({ showModal, onClose, entry }): ReactElement => {
    const dispatch = useDispatchApp()

    const { isLoading } = useSelector(entriesSelector)

    const onDelete = async (): Promise<void> => {
        if (entry) {
            await dispatch(deleteEntryAction(entry._id))
            onClose()
        }
    }

    return (
        <DefaultModal hideOverlay showModal={showModal} onClose={onClose}>
            <ModalCtr>
                <Typography variant="h3" color="secondary" className="modal__title">
                    Are you sure you want to delete
                    <Typography variant="span" color="danger" className="modal__title-task">
                        {entry?.name}
                    </Typography>
                    ?
                </Typography>

                <ModalCtrRow>
                    <DefaultButton
                        text="Cancel"
                        type="button"
                        disabled={true}
                        styledType="secondary"
                        outline
                        className="modal__button"
                        onClick={onClose}
                    />
                    <DefaultButton
                        text={`${isLoading ? 'Erasing...' : 'Delete Task'}`}
                        type="submit"
                        disabled={true}
                        styledType="secondary"
                        className="modal__button"
                        onClick={onDelete}
                    />
                </ModalCtrRow>
            </ModalCtr>
        </DefaultModal>
    )
}

export default ModalDeleteTask
