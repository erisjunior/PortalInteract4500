import { User, Reports } from 'pages'

var routes = [
  {
    path: '/perfil',
    name: 'Perfil',
    icon: 'nc-icon nc-single-02',
    component: User
  },
  {
    path: '/relatorios',
    name: 'Relatórios',
    icon: 'nc-icon nc-diamond',
    component: Reports
  }
]
export default routes
