import { ReactElement } from 'react'

// views
import { HomeView } from '../views'

// base components
import { MainLayout, ViewLayout, MainStateLayout } from '../components'

const HomePage = (): ReactElement => {
    return <HomeView />
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
