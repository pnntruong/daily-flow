<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';



export default{
  name: 'App',
  components: {
    Header,
    Footer,
  },

}
</script>

<style lang="scss">
</style>
