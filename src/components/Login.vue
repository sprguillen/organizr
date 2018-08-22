<template>
  <div class="login-view">
    <img src="../assets/HiTechSmall.jpg" class="logo-size">
    <div class="card border-dark mb-3 login-form-font">
      <div class="card-header">Login to Organizr</div>
      <div class="card-body">
        <form action="#" method="POST" v-on:submit.prevent="loginUser">
          <div class="form">
            <input type="text" name="login-username" v-model="username"
              class="form-control" placeholder="Enter username">
            <br/>
            <input type="password" name="login-password" v-model="password"
              class="form-control" placeholder="Enter password">
            <br/>
            <button type="submit" class="btn btn-dark">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import serverRoutes from '../serverRoutes';

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    loginUser() {
      if (this.username && this.password) {
        axios.post(serverRoutes.loginAPI, {
          username: this.username,
          password: this.password,
        }).then((response) => {
          if (response.data.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwt', response.data.token);
            this.$swal({
              type: 'success',
              text: 'Successfully logged in!',
            });
          }
        }).catch((error) => {
          this.$swal({
            type: 'error',
            title: 'Login Error!',
            text: error,
          });
        });
      } else {
        this.$swal({
          type: 'error',
          title: 'Oops!',
          text: 'Please provide username and/or password',
        });
      }
    },
  },
};
</script>
<style scoped>
.card {
  width: 18rem;
  margin: 0 auto;
  float: none;
  max-width: 20rem;
}

.login-form-font {
  font-family: 'Montserrat', sans-serif;
}
</style>
