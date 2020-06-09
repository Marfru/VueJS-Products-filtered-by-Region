<template>
  <div class="container">
    <lq-header/>
    <lq-filters :SetValue="setValue"/>
    <lq-products :region="region"/>
    <lq-footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Filters from './components/elements/Filters.vue'
import Products from './components/elements/Products.vue'
import Footer from './components/Footer.vue'
import "./assets/scss/globals/base.scss"

export default {
  name: 'App',
  components: {
    'lq-header': Header,
    'lq-filters': Filters,
    'lq-products': Products,
    'lq-footer': Footer
  },
  data() {
   return {
     region:'all'
   }
  },

  methods: {
    setValue(val) {
       this.region = val;
    }
  }
}
</script>
