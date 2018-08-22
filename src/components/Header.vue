<template>
  <div class="header-view">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <nav class="collapse navbar-collapse">
        <menu-bar class="nav-item mr-auto"></menu-bar>
        <search-bar></search-bar>
        <account-bar></account-bar>
      </nav>
    </nav>
  </div>
</template>
<script>
import MenuBar from '@/components/MenuBar';
import SearchBar from '@/components/SearchBar';
import AccountBar from '@/components/AccountBar';

export default {
  name: 'Header',
  components: {
    'menu-bar': MenuBar,
    'search-bar': SearchBar,
    'account-bar': AccountBar,
  },
};
</script>
<style scoped>
.logo-small {
  width: 2%;
  height: 2%;
}
</style>
