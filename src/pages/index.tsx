import { ReactElement } from 'react'
import { useSelector } from 'react-redux'

// base components
import { MainLayout, ViewLayout, MainStateLayout, Typography } from '../components'

// state
import { RootState } from '../store/store'

const HomePage = (): ReactElement => {
    const { mode } = useSelector((store: RootState) => store.theme)
    return (
        <>
            <Typography variant="h1" color={mode === 'dark' ? 'light' : 'dark'}>
                HomePage
            </Typography>
        </>
    )
}

export default HomePage

HomePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainStateLayout>
            <MainLayout title="Open Jira" description="Open Jira description">
                <ViewLayout>{page}</ViewLayout>
            </MainLayout>
        </MainStateLayout>
    )
}
