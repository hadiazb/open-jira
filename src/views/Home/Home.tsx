import { ReactElement, useMemo, useState, DragEvent } from 'react'
import { useDispatch } from 'react-redux'

// components
import { Typography, ListCardsEntry } from '../../components'
import { HomeHeader, ModalDeleteTask } from './inc'

// selects
import { themeSelector, useSelector, uiSelector, entriesSelector } from '../../selectors'

// styles
import { StyledHomeCtr, StyledHomeContent, StyledHomeCol } from './home-styles'

// interfaces
import { Entry } from '../../interfaces'

// actions
import { updateEntry } from '../../store/entries'
import { onEndDragging } from '../../store/ui'

const HomeView = (): ReactElement => {
    const dispatch = useDispatch()
    const [showDeleteTask, setShowDeleteTask] = useState(false)
    const [chooseEntry, setChooseEntry] = useState<Entry | null>(null)

    const { mode } = useSelector(themeSelector)
    const { isDragging } = useSelector(uiSelector)
    const { entries } = useSelector(entriesSelector)

    const colorMode = useMemo(() => (mode === 'dark' ? 'light' : 'dark'), [mode])

    const onDropEntry = (
        event: DragEvent<HTMLDivElement>,
        status: 'pending' | 'in-progress' | 'finished'
    ): void => {
        const id = event.dataTransfer.getData('id')
        const entry = entries.find((entry) => entry._id === id)

        if (entry) {
            dispatch(
                updateEntry({
                    ...entry,
                    status,
                })
            )
            dispatch(onEndDragging())
        }
    }

    const allowDrop = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault()
    }

    return (
        <>
            <StyledHomeCtr>
                <Typography variant="h1" color={colorMode}>
                    Home Open Jira
                </Typography>
                <HomeHeader />
                <StyledHomeContent>
                    <StyledHomeCol
                        isDragging={isDragging}
                        onDrop={(event) => onDropEntry(event, 'pending')}
                        onDragOver={allowDrop}
                    >
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
                    <StyledHomeCol
                        isDragging={isDragging}
                        onDrop={(event) => onDropEntry(event, 'in-progress')}
                        onDragOver={allowDrop}
                    >
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
                    <StyledHomeCol
                        isDragging={isDragging}
                        onDrop={(event) => onDropEntry(event, 'finished')}
                        onDragOver={allowDrop}
                    >
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
