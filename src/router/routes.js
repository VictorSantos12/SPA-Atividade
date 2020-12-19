
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'people', component: () => import('pages/People.vue') },
      { path: 'films', component: () => import('pages/Films.vue') },
      { path: 'planets', component: () => import('pages/Planets.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
