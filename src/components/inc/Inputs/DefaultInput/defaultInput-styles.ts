import tw, { styled } from 'twin.macro'
import { StyledTransitionMixed, StyledShadowInputMixed } from '../../../../styles'

export interface StyledContainerProps {
    focused?: boolean
    $isError?: boolean
}

export const StyledInputContainer = styled.div<StyledContainerProps>`
    ${StyledShadowInputMixed}
    ${StyledTransitionMixed}
    ${tw`relative my-4 py-2 pb-3 px-2 h-8 flex flex-col justify-end rounded-t bg-light`}

    border-bottom: ${({ focused, $isError, theme }) =>
        focused && `2px solid ${$isError ? theme.colors.danger : theme.colors.secondary}`};

    & span {
        ${tw`absolute -bottom-5 left-0 text-sm`}
    }
`

export interface StyledLabelProps {
    focused?: boolean
    $isError?: boolean
}

export const StyledLabel = styled.label<StyledLabelProps>`
    ${StyledTransitionMixed}
    ${tw`absolute text-base font-bold h-5 top-[40%] left-5 z-0 font-montserrat`}

    top: ${({ focused }) => focused && 'calc(50% - 1.5rem)'};
    left: ${({ focused }) => focused && '10px'};
    font-size: ${({ focused }) => focused && '11px'};
    font-weight: ${({ focused }) => focused && 'normal'};
    color: ${({ $isError, theme }) => ($isError ? theme.colors.danger : theme.colors.secondary)};
`

export const StyledInput = styled.input`
    ${StyledTransitionMixed}
    ${tw`absolute pl-4 bottom-1 h-7 left-0 bg-transparent w-[90%] outline-none border-none z-10 font-montserrat`}
`
