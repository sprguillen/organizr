<template>
  <div class="menubar">
    <div class="container">
      <div class="btn-group" role="group">
        <router-link to="/dashboard" :class="buttonClass('/dashboard')">Home</router-link>
        <router-link to="/kanban" :class="buttonClass('/kanban')">Kanban</router-link>
        <router-link to="/calendar" :class="buttonClass('/calendar')">Calendar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  methods: {
    buttonClass(path) {
      return {
        btn: true,
        'btn btn-danger': this.$route.path === path,
        'btn btn-secondary': this.$route.path !== path,
      };
    },
  },
};
</script>

