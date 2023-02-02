import { ReactElement, FC, useState } from 'react'

// components
import { DefaultButton, DefaultInput, DefaultModal, Form, Typography } from '../../../components'

// styles
import { ModalCtr, ModalCtrRow } from './modalForm-styles'

export interface ModalFormProps {
    showModal: boolean
    onClose: () => void
}

const ModalForm: FC<ModalFormProps> = ({ showModal, onClose }): ReactElement => {
    const [value, setValue] = useState('')

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
    }
    return (
        <DefaultModal showModal={showModal} onClose={onClose}>
            <ModalCtr>
                <Typography variant="h3" color="secondary" className="modal__title">
                    Create new Task
                </Typography>

                <Form className="form__task">
                    <ModalCtrRow>
                        <DefaultInput
                            name="name"
                            label="Task Name"
                            className="modal__input"
                            value={value}
                            onChange={onChangeValue}
                            error={{ message: '', type: 'form' }}
                        />
                        <DefaultInput
                            name="description"
                            label="Task Description"
                            className="modal__input"
                            value={value}
                            onChange={onChangeValue}
                            error={{ message: '', type: 'form' }}
                        />
                    </ModalCtrRow>
                    <ModalCtrRow>
                        <DefaultInput
                            name="name"
                            label="Task Name"
                            className="modal__input"
                            value={value}
                            onChange={onChangeValue}
                            error={{ message: '', type: 'form' }}
                        />
                        <DefaultInput
                            name="description"
                            label="Task Description"
                            className="modal__input"
                            value={value}
                            onChange={onChangeValue}
                            error={{ message: '', type: 'form' }}
                        />
                    </ModalCtrRow>
                    <ModalCtrRow>
                        <DefaultButton
                            text="Cancel"
                            type="button"
                            disabled={true}
                            styledType="secondary"
                            outline
                            className="modal__button"
                        />
                        <DefaultButton
                            text="Create Task"
                            type="submit"
                            disabled={true}
                            styledType="secondary"
                            className="modal__button"
                        />
                    </ModalCtrRow>
                </Form>
            </ModalCtr>
        </DefaultModal>
    )
}

export default ModalForm
