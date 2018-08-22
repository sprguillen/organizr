<template>
  <div class="dashboard-view">
    <header-bar></header-bar>
  </div>
</template>
<script>
import Header from '@/components/Header';

export default {
  name: 'Dashboard',
  components: {
    'header-bar': Header,
  },
};
</script>
<style scoped>
.dashboard-view {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
}
</style>
