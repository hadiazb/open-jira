import tw, { styled } from 'twin.macro'

export const ModalCtr = styled.div`
    ${tw`w-full flex flex-col`}

    & .modal__title {
        ${tw`text-center`}
    }

    & .modal__title-task {
        ${tw`text-md font-bold ml-0.5`}
    }
`

export const ModalCtrRow = styled.div`
    ${tw`flex flex-col md:flex-row justify-between items-center gap-1 mt-5`}

    & .modal__button {
        ${tw`w-full md:w-1/2`}
    }
`
