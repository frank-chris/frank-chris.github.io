import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Lazy load views for better performance
const Home = () => import('../views/HomeView.vue')
const About = () => import('../views/AboutView.vue')
const Projects = () => import('../views/ProjectsView.vue')
const Contact = () => import('../views/ContactView.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: 'Projects'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title based on route meta
router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = `${title} - Chris Francis`
  }
  next()
})

export default router