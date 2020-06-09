<template>
  <div class="lq-filters">
    <button class="lq-button" :class="selectedRegion=='all'?'lq-button--active':null" v-on:click="setValue('all')">All</button>
    <button class="lq-button" :class="selectedRegion=='campbeltown'?'lq-button--active':null" v-on:click="setValue('campbeltown')">Campbeltown</button>
    <button class="lq-button" :class="selectedRegion=='highlands'?'lq-button--active':null" v-on:click="setValue('highlands')">Highlands</button>
    <button class="lq-button" :class="selectedRegion=='islands'?'lq-button--active':null" v-on:click="setValue('islands')">Islands</button>
    <button class="lq-button" :class="selectedRegion=='islay'?'lq-button--active':null" v-on:click="setValue('islay')">Islay</button>
    <button class="lq-button" :class="selectedRegion=='lowlands'?'lq-button--active':null" v-on:click="setValue('lowlands')">Lowlands</button>
    <button class="lq-button" :class="selectedRegion=='speyside'?'lq-button--active':null" v-on:click="setValue('speyside')">Speyside</button>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  props:["SetValue"],
  data() {  
    return {
      selectedRegion: 'all'
    }
  },
  
  methods: {
    async setValue(val) {
      this.selectedRegion=val;
      await this.SetValue(val);
    }
  }
}
</script>
