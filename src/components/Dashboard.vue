<template>
  <div class="dashboard-view">
    <img src="../assets/HiTechLarge.jpg" class="logo-size">
    <daily-activity-card></daily-activity-card>
  </div>
</template>
<script>
import DailyActivityCard from '@/components/DailyActivityCard';

export default {
  name: 'Dashboard',
  components: {
    'daily-activity-card': DailyActivityCard,
  },
};
</script>
<style scoped>
.dashboard-view {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
}
</style>
