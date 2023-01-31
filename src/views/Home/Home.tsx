import { ReactElement, useMemo } from 'react'

// components
import { Typography, ListCardsEntry } from '../../components'

// selects
import { themeSelector, useSelector } from '../../selectors'

// styles
import { StyledHome, StyledCtrCards, StyledCard } from './home-styles'

const HomeView = (): ReactElement => {
    const { mode } = useSelector(themeSelector)

    const colorMode = useMemo(() => (mode === 'dark' ? 'light' : 'dark'), [mode])

    return (
        <StyledHome>
            <Typography variant="h1" color={colorMode}>
                Home Open Jira
            </Typography>
            <StyledCtrCards>
                <StyledCard>
                    <Typography variant="h4" color={colorMode}>
                        Pendientes
                    </Typography>
                    <ListCardsEntry status={'pending'} />
                </StyledCard>
                <StyledCard>
                    <Typography variant="h4" color={colorMode}>
                        Activas
                    </Typography>
                    <ListCardsEntry status={'in-progress'} />
                </StyledCard>
                <StyledCard>
                    <Typography variant="h4" color={colorMode}>
                        Terminado
                    </Typography>
                    <ListCardsEntry status={'finished'} />
                </StyledCard>
            </StyledCtrCards>
        </StyledHome>
    )
}

export default HomeView
