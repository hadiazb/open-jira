/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, FC, useRef, ChangeEvent, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFormState } from 'react-hook-form'

// components
import { DefaultButton, DefaultInput, DefaultModal, Form, Typography } from '../../../../components'

// hooks
import { useCreateNewTaskForm, TaskType, taskSchema } from '../../hooks'
import { useDispatchApp } from '../../../../hooks'

// styles
import { ModalCtr, ModalCtrRow } from './modalForm-styles'

// actions
import {
    createEntryAction,
    updateEntryAction,
    onCleanSelectedEntry,
    onSetCreate,
} from '../../../../store/entries'

// selector
import { entriesSelector, useSelector } from '../../../../selectors'

export interface ModalFormProps {
    showModal: boolean
    onClose: () => void
}

const ModalForm: FC<ModalFormProps> = ({ showModal, onClose }): ReactElement => {
    const dispatch = useDispatchApp()

    const { isLoading, entryActive, isEditOrCreateEntry } = useSelector(entriesSelector)

    const defaultValuesRef = useRef<TaskType>({
        name: '',
        description: '',
    })

    const { control, watch, setValue, getValues, handleSubmit, reset } = useCreateNewTaskForm({
        defaultValues: defaultValuesRef.current,
        validationSchema: yupResolver(taskSchema),
    })
    watch()

    const { errors, isValid } = useFormState({ control })

    useEffect(() => {
        return () => {
            dispatch(onCleanSelectedEntry())
            dispatch(onSetCreate())
        }
    }, [])

    useEffect(() => {
        if (entryActive) {
            setValue('name', entryActive.name, { shouldValidate: true })
            setValue('description', entryActive.description, { shouldValidate: true })
        }
    }, [entryActive])

    const onSubmit = async ({ name, description }: TaskType): Promise<void> => {
        if (isEditOrCreateEntry) {
            await dispatch(createEntryAction({ name, description }))
        } else {
            if (entryActive) {
                await dispatch(
                    updateEntryAction({ ...entryActive, name, description }, entryActive._id)
                )
            }
        }
        reset()
        _onClose()
    }

    const _onClose = (): void => {
        dispatch(onCleanSelectedEntry())
        onClose()
        reset()
    }

    const putTextButton = (): string => {
        if (isEditOrCreateEntry) {
            return `${isLoading ? 'Creating...' : 'Create Task'}`
        } else {
            return `${isLoading ? 'Editing...' : 'Edit Task'}`
        }
    }

    return (
        <>
            {showModal && (
                <DefaultModal showModal={showModal} onClose={_onClose} hideOverlay>
                    <ModalCtr>
                        <Typography variant="h3" color="secondary" className="modal__title">
                            {isEditOrCreateEntry ? 'Create new Task' : 'Edit Task'}
                        </Typography>

                        <Form onSubmit={handleSubmit(onSubmit)} className="form__task">
                            <ModalCtrRow>
                                <DefaultInput
                                    label="Task Name"
                                    className="modal__input"
                                    error={{
                                        message: errors.name?.message ?? '',
                                        type: errors.name?.type,
                                    }}
                                    value={getValues('name')}
                                    name="name"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        setValue('name', e.target.value, { shouldValidate: true })
                                    }}
                                    onBlur={(value) => {
                                        setValue('name', value, {
                                            shouldValidate: true,
                                        })
                                    }}
                                />
                                <DefaultInput
                                    label="Task Description"
                                    className="modal__input"
                                    error={{
                                        message: errors.description?.message ?? '',
                                        type: errors.name?.type,
                                    }}
                                    value={getValues('description')}
                                    name="description"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        setValue('description', e.target.value, {
                                            shouldValidate: true,
                                        })
                                    }}
                                    onBlur={(value) => {
                                        setValue('description', value, { shouldValidate: true })
                                    }}
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
                                    onClick={_onClose}
                                />
                                <DefaultButton
                                    text={putTextButton()}
                                    type="submit"
                                    disabled={isValid}
                                    styledType="secondary"
                                    className="modal__button"
                                />
                            </ModalCtrRow>
                        </Form>
                    </ModalCtr>
                </DefaultModal>
            )}
        </>
    )
}

export default ModalForm
