import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const AppChat = Loadable(lazy(() => import('views/application/chat')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/app/chat',
            element: <AppChat />
        }
    ]
};

export default MainRoutes;
