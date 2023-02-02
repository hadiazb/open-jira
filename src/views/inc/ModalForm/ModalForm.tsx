import { ReactElement, FC, useState } from 'react'

// components
import { DefaultButton, DefaultInput, DefaultModal, Form, Typography } from '../../../components'

// styles
import { ModalCtr, CtrButtons } from './modalForm-styles'

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
                    <DefaultInput
                        name="name"
                        label="Task Name"
                        value={value}
                        onChange={onChangeValue}
                        error={{ message: '', type: 'form' }}
                    />
                    <DefaultInput
                        name="description"
                        label="Task Description"
                        value={value}
                        onChange={onChangeValue}
                        error={{ message: '', type: 'form' }}
                    />
                    <CtrButtons>
                        <DefaultButton
                            text="Cancel"
                            type="button"
                            disabled={true}
                            styledType="secondary"
                            outline
                        />
                        <DefaultButton
                            text="Create new Task"
                            type="submit"
                            disabled={true}
                            styledType="secondary"
                        />
                    </CtrButtons>
                </Form>
            </ModalCtr>
        </DefaultModal>
    )
}

export default ModalForm
