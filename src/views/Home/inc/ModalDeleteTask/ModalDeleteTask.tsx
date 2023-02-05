import { ReactElement, FC } from 'react'
import { useDispatch } from 'react-redux'

// components
import { DefaultButton, DefaultModal, Typography } from '../../../../components'

// interfaces
import { Entry } from '../../../../interfaces'

// styles
import { ModalCtr, ModalCtrRow } from './modalDeleteTask-styles'

// actions
import { deleteEntry } from '../../../../store/entries'

export interface ModalDeleteTaskProps {
    entry: Entry | null
    showModal: boolean
    onClose: () => void
}

const ModalDeleteTask: FC<ModalDeleteTaskProps> = ({ showModal, onClose, entry }): ReactElement => {
    const dispatch = useDispatch()
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
                        text="Delete Task"
                        type="submit"
                        disabled={true}
                        styledType="secondary"
                        className="modal__button"
                        onClick={() => {
                            if (entry) {
                                dispatch(deleteEntry(entry))
                                onClose()
                            }
                        }}
                    />
                </ModalCtrRow>
            </ModalCtr>
        </DefaultModal>
    )
}

export default ModalDeleteTask
