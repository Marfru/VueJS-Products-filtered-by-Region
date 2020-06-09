import Vue from 'vue'
import Router from 'vue-router'
import Product from '../components/pages/Product.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
