import { ReactElement, FC } from 'react'

// styles
import { StyledSidebar } from './sidebar-styles'

export interface SidebarProps {
    showSidebar: boolean
}

const Sidebar: FC<SidebarProps> = ({ showSidebar }): ReactElement => {
    return (
        <StyledSidebar show={showSidebar}>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
                <li>Option 5</li>
                <li>Option 6</li>
                <li>Option 7</li>
            </ul>
        </StyledSidebar>
    )
}

export default Sidebar
