import { ReactElement, FC } from 'react'
import { useSelector } from 'react-redux'

// components
import { Typography } from '../..'

// models
import { RootState } from '../../../store/store'

// styles
import { StyledSidebar, ListOptions, ItemOption, InboxIcon, SaveIcon } from './sidebar-styles'

export interface SidebarProps {
    showSidebar: boolean
}

const Sidebar: FC<SidebarProps> = ({ showSidebar }): ReactElement => {
    const { mode } = useSelector((store: RootState) => store.theme)

    const options = [
        {
            id: 1,
            text: 'Inbox',
            icon: <InboxIcon size={25} />,
        },
        {
            id: 2,
            text: 'Save',
            icon: <SaveIcon size={25} />,
        },
    ]

    return (
        <StyledSidebar show={showSidebar}>
            <ListOptions>
                {options.map((option) => (
                    <ItemOption key={option.id}>
                        <Typography variant="h3" color={mode}>
                            {option.text}
                        </Typography>
                        {option.icon}
                    </ItemOption>
                ))}
            </ListOptions>
        </StyledSidebar>
    )
}

export default Sidebar
