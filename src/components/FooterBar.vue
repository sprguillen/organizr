<template>
  <div class="footer-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="footer-note">
        <i class="far fa-copyright fa-xs"></i>
        <small>HiTechnologies Inc., Davao City</small>
        <img src="../assets/HiTechSmall.jpg" class="logo-footer">
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'FooterBar',
};
</script>
<style scoped>
.footer-note {
  position: absolute;
  right: -25%;
}
.logo-footer {
  height: 2%;
  width: 2%;
}
</style>
