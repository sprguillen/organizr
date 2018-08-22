<template>
  <div class="dashboard-view">
    <img src="../assets/HiTechLarge.jpg" class="logo-size">
    <daily-activity-card></daily-activity-card>
    <footer-bar class="fixed-bottom"></footer-bar>
  </div>
</template>
<script>

import Header from '@/components/Header';
import DailyActivityCard from '@/components/DailyActivityCard';
import FooterBar from '@/components/FooterBar';

export default {
  name: 'Dashboard',
  components: {
    'header-bar': Header,
    'daily-activity-card': DailyActivityCard,
    'footer-bar': FooterBar,
  },
};
</script>
<style scoped>
.dashboard-view {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
}
</style>
