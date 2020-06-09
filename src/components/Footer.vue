<template>
  <footer class="lq-footer">
    <a class="lq-footer__link" v-for="article in articles" :key="article.title" :href="article.url" target="_blank">
    <div class="lq-footer__item">
      <h2>{{article.title}}</h2>
      <p>{{article.teaser}}</p>
      </div>
    </a>
    </footer>
    
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapState('articles', ['articles']),
  },
  created() {
    this.$store.dispatch('articles/loadArticles')
  },
}
</script>
