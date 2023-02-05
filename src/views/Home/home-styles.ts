import tw, { styled } from 'twin.macro'

import { StyledShadowMixed, StyledTransitionMixed } from '../../styles'

export const StyledHomeCtr = styled.section`
    ${tw`flex flex-col items-center`}
`

export const StyledHomeContent = styled.div`
    ${StyledTransitionMixed}
    ${tw`w-full mt-5 mb-3 flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-10`}
`

export interface IsDragging {
    isDragging?: boolean
}

export const StyledHomeCol = styled.div<IsDragging>`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`px-2 py-2 md:w-1/3 md:min-h-[75vh] flex flex-col items-center justify-start rounded`}
    ${tw`opacity-80`}
    border: ${({ theme }) => `1px solid ${theme.colors.dark}`};

    ${({ isDragging }) =>
        isDragging
            ? tw`opacity-80 border-2 border-dashed border-secondary bg-secondary/30`
            : tw`opacity-100`}

    & h4 {
        ${tw`py-3 font-helvetica font-bold w-11/12 text-center opacity-100`}
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.dark}`};
    }
`
