import { ReactElement, useMemo } from 'react'

// components
import { Typography, ListCardsEntry } from '../../components'
import { HomeHeader } from '../inc'

// selects
import { themeSelector, useSelector } from '../../selectors'

// styles
import { StyledHomeCtr, StyledHomeContent, StyledHomeCol } from './home-styles'

const HomeView = (): ReactElement => {
    const { mode } = useSelector(themeSelector)

    const colorMode = useMemo(() => (mode === 'dark' ? 'light' : 'dark'), [mode])

    return (
        <StyledHomeCtr>
            <Typography variant="h1" color={colorMode}>
                Home Open Jira
            </Typography>
            <HomeHeader />
            <StyledHomeContent>
                <StyledHomeCol>
                    <Typography variant="h4" color={colorMode}>
                        Pendientes
                    </Typography>
                    <ListCardsEntry status="pending" />
                </StyledHomeCol>
                <StyledHomeCol>
                    <Typography variant="h4" color={colorMode}>
                        Activas
                    </Typography>
                    <ListCardsEntry status="in-progress" />
                </StyledHomeCol>
                <StyledHomeCol>
                    <Typography variant="h4" color={colorMode}>
                        Terminado
                    </Typography>
                    <ListCardsEntry status="finished" />
                </StyledHomeCol>
            </StyledHomeContent>
        </StyledHomeCtr>
    )
}

export default HomeView
