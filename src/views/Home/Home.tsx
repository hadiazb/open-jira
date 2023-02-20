/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useMemo, useState, DragEvent, useEffect } from 'react'

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
import { getEntriesAction, onSelectedEntry, updateEntryAction } from '../../store/entries'
import { onEndDragging } from '../../store/ui'
import { onShowModalUpsert } from '../../store/ui'

// hooks
import { useDispatchApp } from '../../hooks'

const HomeView = (): ReactElement => {
    const dispatch = useDispatchApp()
    const [showDeleteTask, setShowDeleteTask] = useState(false)
    const [chooseEntry, setChooseEntry] = useState<Entry | null>(null)

    const { mode } = useSelector(themeSelector)
    const { isDragging } = useSelector(uiSelector)
    const { entries } = useSelector(entriesSelector)

    const colorMode = useMemo(() => (mode === 'dark' ? 'light' : 'dark'), [mode])

    useEffect(() => {
        dispatch(getEntriesAction())
    }, [])

    const onDropEntry = (
        event: DragEvent<HTMLDivElement>,
        status: 'pending' | 'in-progress' | 'finished'
    ): void => {
        const id = event.dataTransfer.getData('id')
        const entry = entries.find((entry) => entry._id === id)

        if (entry) {
            dispatch(updateEntryAction({ ...entry, status }, entry._id))
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
                            onEdit={(entry) => {
                                setChooseEntry(entry)
                                dispatch(onShowModalUpsert())
                                dispatch(onSelectedEntry(entry))
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
                            onEdit={(entry) => {
                                setChooseEntry(entry)
                                dispatch(onShowModalUpsert())
                                dispatch(onSelectedEntry(entry))
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
                            onEdit={(entry) => {
                                setChooseEntry(entry)
                                dispatch(onShowModalUpsert())
                                dispatch(onSelectedEntry(entry))
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
