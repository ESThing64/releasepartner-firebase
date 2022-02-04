import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Calendar from 'views/application/calendar';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const AppChat = Loadable(lazy(() => import('views/application/chat')));
const AppCalendar = Loadable(lazy(() => import('views/application/calendar')));
const AppUserSocialProfile = Loadable(lazy(() => import('views/application/users/social-profile')));
const AppUserAccountProfile1 = Loadable(lazy(() => import('views/application/users/account-profile/Profile1')));
const AppProfileCardStyle1 = Loadable(lazy(() => import('views/application/users/card/CardStyle1')));
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
            path: '/user/social-profile/:tab',
            element: <AppUserSocialProfile />
        },
        {
            path: '/user/account-profile/profile1',
            element: <AppUserAccountProfile1 />
        },
        {
            path: '/user/list',
            element: <AppProfileCardStyle1 />
        },
        {
            path: '/app/calendar',
            element: <Calendar />
        }
    ]
};

export default MainRoutes;
