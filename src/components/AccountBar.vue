<template>
  <div class="account-bar">
    <div class="container">
      <div class="btn-group" role="group">
        <button class="btn btn-success" title="Notifications">
          <i class="fas fa-bell"></i>
        </button>
        <button class="btn btn-warning" title="Account">
          <i class="fas fa-male"></i>
        </button>
        <button class="btn btn-danger" title="Log-out">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AccountBar',
};
</script>
