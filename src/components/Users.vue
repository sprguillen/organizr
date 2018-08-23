<template>
  <div class="users-container">
    <div class="btn-group float-right mr-4 mt-4" role="group">
      <router-link to="/register" class="btn btn-success" title="Add New User">
        <i class="fas fa-plus-circle"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Users',
};
</script>
