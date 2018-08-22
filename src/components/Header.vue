<template>
  <div class="header-view">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <nav class="collapse navbar-collapse">
        <menu-bar class="nav-item mr-auto"></menu-bar>
        <img src="../assets/HiTechSmall.jpg" class="logo-small">
        <search-bar></search-bar>
      </nav>
    </nav>
  </div>
</template>
<script>
import MenuBar from '@/components/MenuBar';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'Header',
  components: {
    'menu-bar': MenuBar,
    'search-bar': SearchBar,
  },
};
</script>
<style scoped>
.logo-small {
  width: 2%;
  height: 2%;
}
</style>

