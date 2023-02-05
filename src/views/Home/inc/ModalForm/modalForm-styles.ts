import tw, { styled } from 'twin.macro'

export const ModalCtr = styled.div`
    ${tw`w-full flex flex-col`}

    & .modal__title {
        ${tw`text-center`}
    }

    & .form__task {
        ${tw`px-3 flex flex-col`}
    }
`

export const ModalCtrRow = styled.div`
    ${tw`flex flex-col md:flex-row justify-between items-center gap-1 mt-5`}

    & .modal__input {
        ${tw`w-full md:w-1/2 mx-1.5`}
    }

    & .modal__button {
        ${tw`w-full md:w-1/2`}
    }
`
