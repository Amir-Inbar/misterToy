import Vue from 'vue'
import VueRouter from 'vue-router'
import storeApp from '../views/store-app.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDetails from '../views/toy-details.vue'
import dashboard from '../views/dashboard.vue'
import userLogin from '../views/toy-login.vue'
import adminPage from '../views/admin-page.vue'
import reviewApp from '../views/review-app.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'store',
    component: storeApp
  },
  {
    path: '/edit/:toyId?',
    name: 'toyEdit',
    component: toyEdit
  },
  {
    path: '/details/:toyId',
    name: 'toyDetails',
    component: toyDetails
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/login',
    name: 'userLogin',
    component: userLogin
  },
  {
    path: '/admin',
    name: 'adminPage',
    component: adminPage
  },
  {
    path: '/review',
    name: 'review',
    component: reviewApp
  },
]

const router = new VueRouter({
  routes
})

export default router
