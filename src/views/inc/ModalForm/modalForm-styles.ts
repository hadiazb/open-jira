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

export const CtrButtons = styled.div`
    ${tw`flex justify-between items-center gap-1 mt-5`}

    & button {
        ${tw`w-1/2`}
    }
`
