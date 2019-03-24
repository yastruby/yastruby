import Vue from 'vue'
import Router from 'vue-router'
import RatingList from './views/RatingList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rating',
      component: RatingList
    },
    {
      path: '/user/:id',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    }
  ]
})
