/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useForm, FieldValues, DeepPartial, Resolver } from 'react-hook-form'
import * as yup from 'yup'

// validation schema
export const taskSchema = yup
    .object({
        name: yup.string().required('Campo obligatorio'),
        description: yup.string().required('Campo obligatorio'),
    })
    .required()

// type definitions
export type TaskType = yup.InferType<typeof taskSchema>

export interface IUseCreateTaskFormArgs<F extends FieldValues = TaskType> {
    defaultValues: DeepPartial<F | TaskType>
    validationSchema?: Resolver<F | TaskType>
}

export const useCreateNewTaskForm = <TFieldValues extends FieldValues = TaskType>({
    defaultValues,
    validationSchema,
}: IUseCreateTaskFormArgs<TFieldValues>) => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        setError,
        clearErrors,
        control,
        watch,
        reset,
    } = useForm<TFieldValues | TaskType>({
        mode: 'all',
        resolver: validationSchema,
        defaultValues,
    })

    return {
        register,
        handleSubmit,
        getValues,
        setValue,
        setError,
        clearErrors,
        control,
        watch,
        reset,
    }
}
