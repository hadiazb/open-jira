import { ReactElement, FC } from 'react'
import { useSelector } from 'react-redux'

// components
import { Typography } from '../..'

// models
import { RootState } from '../../../store/store'

// styles
import { StyledSidebar, ListOptions, ItemOption, InboxIcon } from './sidebar-styles'

export interface SidebarProps {
    showSidebar: boolean
}

const Sidebar: FC<SidebarProps> = ({ showSidebar }): ReactElement => {
    const { mode } = useSelector((store: RootState) => store.theme)

    return (
        <StyledSidebar show={showSidebar}>
            <ListOptions>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                    <ItemOption key={option}>
                        <Typography variant="h3" color={mode}>
                            Option {option}
                        </Typography>
                        <InboxIcon size={25} />
                    </ItemOption>
                ))}
            </ListOptions>
        </StyledSidebar>
    )
}

export default Sidebar
