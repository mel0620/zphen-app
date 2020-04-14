
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',             component: () => import('pages/Home/Home.vue') },
      { path: '/login',       component: () => import('pages/Login/Login.vue') },
      { path: '/signup',      component: () => import('pages/SignUp/SignUp.vue') },
      { path: '/be-a-vendor', component: () => import('pages/Vendor/BeAVendor.vue') },
      { path: '/my-cart',     component: () => import('pages/MyCart/MyCart.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
