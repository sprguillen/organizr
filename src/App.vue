<template>
  <div id="app">
    <header-bar v-if="!showBar"></header-bar>
    <router-view/>
    <footer-bar v-if="!showBar" class="fixed-bottom"></footer-bar>
  </div>
</template>

<script>
import Header from '@/components/Header';
import FooterBar from '@/components/FooterBar';

export default {
  name: 'App',
  components: {
    'header-bar': Header,
    'footer-bar': FooterBar,
  },
  computed: {
    showBar() {
      if (this.$route.path === '/login') {
        return true;
      }

      return false;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo-size {
  width: 30%;
  height: 30%;
}
</style>
