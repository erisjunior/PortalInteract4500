import Dashboard from 'pages/Dashboard.jsx'
import Notifications from 'pages/Notifications.jsx'
import Icons from 'pages/Icons.jsx'
import Typography from 'pages/Typography.jsx'
import TableList from 'pages/Tables.jsx'
import UserPage from 'pages/User.jsx'

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'nc-icon nc-diamond',
    component: Icons,
    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'nc-icon nc-bell-55',
    component: Notifications,
    layout: '/admin'
  },
  {
    path: '/user-page',
    name: 'User Profile',
    icon: 'nc-icon nc-single-02',
    component: UserPage,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Table List',
    icon: 'nc-icon nc-tile-56',
    component: TableList,
    layout: '/admin'
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: 'nc-icon nc-caps-small',
    component: Typography,
    layout: '/admin'
  }
]
export default routes
