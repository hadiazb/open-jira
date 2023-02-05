import { ButtonHTMLAttributes } from 'react'

import tw, { styled } from 'twin.macro'
import { StyledShadowMixed, StyledTransitionMixed } from '../../../../styles'

export interface ButtonStyledProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean
    styledType?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'info'
        | 'danger'
        | 'light'
        | 'dark'
}

export const ButtonStyled = styled.button.attrs({})<ButtonStyledProps>`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`rounded-md min-w-[150px] text-base py-4 px-5 m-1.5 font-bold border border-solid`}
    ${tw`cursor-pointer`}
    ${({ outline }) => (outline ? tw`opacity-100` : tw`opacity-90`)}

    color: ${({ outline, theme, styledType }) =>
        outline ? theme.colors[styledType || 'dark'] : theme.colors.white};
    background: ${({ outline, theme, styledType }) => {
        if (outline) {
            return 'transparent'
        }
        return theme.colors[styledType || 'secondary']
    }};
    border-color: ${({ outline, theme, styledType }) =>
        outline ? theme.colors[styledType || 'dark'] : theme.colors[styledType || 'dark']};

    &:hover {
        ${tw`opacity-100`}
        ${({ outline }) => outline && tw`text-white`};

        background: ${({ outline, theme, styledType }) =>
            outline && theme.colors[styledType || 'light']};
    }

    &:disabled {
        ${tw`opacity-60`}
    }
`
