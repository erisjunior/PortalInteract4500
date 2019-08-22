import { Profile, SendReport, Login, Reports } from 'pages'

const unloggedRoutes = [
  {
    path: '/login',
    name: 'Login',
    icon: 'nc-icon nc-single-02',
    component: Login
  }
]

const routes = [
  {
    path: '/perfil',
    name: 'Perfil',
    icon: 'nc-icon nc-single-02',
    component: Profile
  },
  {
    path: '/enviar-relatorio',
    name: 'Enviar Relatório',
    icon: 'nc-icon nc-send',
    component: SendReport
  },
  {
    path: '/relatorios',
    name: 'Relatórios',
    icon: 'nc-icon nc-single-copy-04',
    component: Reports
  }
]

export { routes, unloggedRoutes }
