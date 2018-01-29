import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function load (view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: load('Home')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: load('Calculator')
  },
  {
    path: '/job',
    name: 'Job',
    component: load('Job')
  },
  {
    path: '/login',
    name: 'Login',
    component: load('Admin/Login')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: load('Admin'),
    children: [
      {
        path: 'ubSections',
        component: load('Admin/content/ubSections'),
        children: [
          {
            path: 'new',
            component: load('Admin/content/ubSectionsNew')
          },
          {
            path: 'edit/:key',
            component: load('Admin/content/ubSectionsEdit')
          }
        ]
      },
      {
        path: 'jobSections',
        component: load('Admin/content/jobSections'),
        children: [
          {
            path: 'new',
            component: load('Admin/content/jobSectionsNew')
          },
          {
            path: 'edit/:key',
            component: load('Admin/content/jobSectionsEdit')
          }
        ]
      },
      {
        path: 'spinner',
        component: load('Admin/content/Spinner'),
        children: [
          {
            path: 'new',
            component: load('Admin/content/SpinnerNew')
          },
          {
            path: 'edit/:key',
            component: load('Admin/content/SpinnerEdit')
          }
        ]
      },
      {
        path: 'hero',
        component: load('Admin/content/Hero'),
        children: [
          {
            path: 'new',
            component: load('Admin/content/HeroNew')
          },
          {
            path: 'edit/:key',
            component: load('Admin/content/HeroEdit')
          }
        ]
      },
      {
        path: 'posts',
        component: load('Posts'),
        children: [
          {
            path: 'new',
            component: load('PostNew')
          },
          {
            path: 'edit/:key',
            component: load('PostEdit')
          }
        ]
      },
      {
        path: 'settings',
        component: load('Settings')
      },
      {
        path: 'pages',
        component: load('Pages')
      },
      {
        path: 'media',
        component: load('Media')
      }
    ]
  },
  {
    path: '*',
    name: 'default',
    component: load('Home')
  }
]

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
