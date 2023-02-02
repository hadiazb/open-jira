import tw, { styled } from 'twin.macro'

import { BsFillPlusCircleFill, BsPlusCircle, BsTrashFill, BsTrash } from 'react-icons/bs'

export const StyledCtrHomeHeader = styled.section`
    ${tw`w-full flex items-center`}
`

export const StyledCtrOptions = styled.div`
    ${tw` my-1 flex items-center`}
`

export const AddDarkIcon = styled(BsFillPlusCircleFill)`
    ${tw`mr-4 cursor-pointer`}
    color: ${({ theme }) => theme.colors.dark};
`

export const AddLightIcon = styled(BsPlusCircle)`
    ${tw`mr-4 cursor-pointer`}
    color: ${({ theme }) => theme.colors.dark};
`

export const RemoveLightIcon = styled(BsTrash)`
    ${tw`mr-4 cursor-pointer`}
    color: ${({ theme }) => theme.colors.dark};
`

export const RemoveDarkIcon = styled(BsTrashFill)`
    ${tw`mr-4 cursor-pointer`}
    color: ${({ theme }) => theme.colors.dark};
`
