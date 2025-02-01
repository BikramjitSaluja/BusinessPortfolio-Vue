const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:"home", component: () => import('pages/IndexPage.vue') },
      { path: '/aboutus', name:"aboutus", component: () => import('pages/AboutUs.vue') },
      { path: '/services', name:"services", component: () => import('pages/Services.vue') },
      { path: '/faq', name:"faq", component: () => import('pages/FAQ.vue') },
      { path: '/menu', name:"menu", component: () => import('pages/Menu.vue') },
      { path: '/contact', name:"contact", component: () => import('pages/ContactUs.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
