import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        guest: true,
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        guest: true,
      },
    },
    // {
    //   path: '/register',
    //   component: Register,
    // }
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

//This will check if the local storage of a particular user
//exists, redirect to login if it doesnt, else redirect user
//to the dashboard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') === null) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') === null) {
      next();
    } else {
      next({ name: 'dashboard' });
    }
  } else {
    next();
  }
});

export default router;
