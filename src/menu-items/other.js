// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {  IconSearch,IconBrandHipchat, IconCalendarEvent, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconCalendarEvent,
    IconHelp,
    IconSitemap,
    IconBrandHipchat,
    IconSearch
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'app-chat',
            title: <FormattedMessage id="app-chat" />,
            type: 'item',
            url: '/app/chat',
            icon: icons.IconBrandHipchat,
            breadcrumbs: false
        },
        {
            id: 'calendar',
            title: <FormattedMessage id="calendar" />,
            type: 'item',
            url: '/app/calendar',
            icon: icons.IconCalendarEvent,
           
        },
        {
            id: 'search',
            title: <FormattedMessage id="search" />,
            type: 'item',
            url: 'user/list',
            icon: icons.IconSearch,
           
        }
    ]
};

export default other;
