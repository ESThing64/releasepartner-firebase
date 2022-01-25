import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Calendar from 'views/application/calendar';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const AppChat = Loadable(lazy(() => import('views/application/chat')));
const AppCalendar = Loadable(lazy(() => import('views/application/calendar')))
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
        },
        {
            path: '/app/calendar',
            element: <Calendar />
        }
    ]
};

export default MainRoutes;
