import Head from 'next/head';

// styles
import { StyledMainLayout } from './mainLayout-styles';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export type MainLayoutProps = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    contentDescription?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    title,
    description,
    contentDescription,
}) => {
    return (
        <>
            <Head>
                <title>{title ?? 'Pokemon App'}</title>
                <meta
                    name={description ?? 'Pokemon'}
                    content={contentDescription ?? 'Description de Pokemon'}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StyledMainLayout>{children}</StyledMainLayout>
        </>
    );
};

export default MainLayout;
