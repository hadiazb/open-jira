import { ReactElement, useMemo, useState } from 'react'

// components
import { Typography, ListCardsEntry } from '../../components'
import { HomeHeader, ModalDeleteTask } from './inc'

// selects
import { themeSelector, useSelector } from '../../selectors'

// styles
import { StyledHomeCtr, StyledHomeContent, StyledHomeCol } from './home-styles'

// interfaces
import { Entry } from '../../interfaces'

const HomeView = (): ReactElement => {
    const [showDeleteTask, setShowDeleteTask] = useState(false)
    const [chooseEntry, setChooseEntry] = useState<Entry | null>(null)

    const { mode } = useSelector(themeSelector)

    const colorMode = useMemo(() => (mode === 'dark' ? 'light' : 'dark'), [mode])

    return (
        <>
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
                        <ListCardsEntry
                            status="pending"
                            onDelete={(entry) => {
                                setChooseEntry(entry)
                                setShowDeleteTask(true)
                            }}
                        />
                    </StyledHomeCol>
                    <StyledHomeCol>
                        <Typography variant="h4" color={colorMode}>
                            Activas
                        </Typography>
                        <ListCardsEntry
                            status="in-progress"
                            onDelete={(entry) => {
                                setChooseEntry(entry)
                                setShowDeleteTask(true)
                            }}
                        />
                    </StyledHomeCol>
                    <StyledHomeCol>
                        <Typography variant="h4" color={colorMode}>
                            Terminado
                        </Typography>
                        <ListCardsEntry
                            status="finished"
                            onDelete={(entry) => {
                                setChooseEntry(entry)
                                setShowDeleteTask(true)
                            }}
                        />
                    </StyledHomeCol>
                </StyledHomeContent>
            </StyledHomeCtr>
            <ModalDeleteTask
                entry={chooseEntry}
                showModal={showDeleteTask}
                onClose={() => {
                    setShowDeleteTask(false)
                }}
            />
        </>
    )
}

export default HomeView
