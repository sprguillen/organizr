<template>
  <div class="daily-card-body ml-4">
    <div class="card border-success mb-3 mb-3 card-max-width">
      <div class="card-header">{{currentDate}}</div>
      <div class="card-body">
        <p class="card-text">
          <small>
            Create organizr app for my portfolio! This is brought to you by HiTechnologies Inc.
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DailyActivityCard',
  data() {
    return {
      currentDate: moment(new Date()).format('MMM D, YYYY'),
    };
  },
};
</script>
<style scoped>
.card-max-width {
  max-width: 20rem;
}
</style>
