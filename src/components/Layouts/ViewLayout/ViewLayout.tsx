import { StyledViewLayout } from './viewLayout.module-styles'

export type ViewMainLayoutProps = {
    children: React.ReactNode
    pt?: string
}

const ViewMainLayout: React.FC<ViewMainLayoutProps> = ({ children, pt }) => {
    return <StyledViewLayout pt={pt}>{children}</StyledViewLayout>
}

export default ViewMainLayout
