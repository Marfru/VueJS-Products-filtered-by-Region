<template>
  <div class="lq-products">
    <div class="lq-products__item" v-for="whisky in regionsFiltered" :key="whisky.title">
      <div class="lq-products__item__content">
        <h2 class="lq-products__item__title">{{whisky.title}}</h2>
        <p class="lq-products__item__region">{{whisky.region}}</p>
        <p class="lq-products__item__price">${{whisky.cost}}</p>
        <div class="lq-products__item__tasting" :class="`lq-region--` + whisky.region">
          <p v-for="tasting in whisky.tasting_notes" :key="tasting">{{tasting}}</p>
        </div>
      </div>
      <img class="lq-products__item__image" v-bind:src="'../../assets/img/' + whisky.image"/>
      <div class="lq-products__item__separator" :class="`lq-region--` + whisky.region"/>
    </div>
  </div> 
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Products',
  props: ['region'],
  computed: {
    ...mapState('whiskies', ['whiskies']),

    regionsFiltered() {
      return this.region === 'all' ? this.whiskies : this.whiskies.filter (
        whisky => whisky.region === this.region        
      )
    }
  },
  created() {
    this.$store.dispatch('whiskies/loadWhiskies')
  }
}
</script>
