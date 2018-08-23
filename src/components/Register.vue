<template>
  <div class="registration-container">
    <div class="card border-dark mb-3 mt-3 login-form-font">
      <div class="card-header">Register New User</div>
      <div class="card-body">
        <form action="#" method="POST" v-on:submit.prevent="registerUser">
          <div class="form">
            <div class="row">
              <div class="form-group col-md-12" :class="{ 'form-group--error': $v.name.$error }">
                <input type="text" name="register-name" v-model="name"
                  class="form-control" placeholder="Enter name">
                <div class="error col-md-11" v-if="!$v.name.required">Field is required</div>
                <div class="error col-md-11" v-if="!$v.name.minLength">
                  Name must have at least {{$v.name.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.email.$error }">
                <input type="email" name="register-email" v-model="email"
                  class="form-control" placeholder="Enter email">
                <div class="error col-md-11" v-if="!$v.email.required">Field is required</div>
                <div class="error col-md-11" v-if="!$v.email.minLength">
                  Name must have at least {{$v.email.$params.minLength.min}} letters.
                </div>
                <div class="error col-md-11" v-if="!$v.email.email">Should be a valid email</div>
              </div>
              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.username.$error }">
                <input type="text" name="register-username" v-model="username"
                  class="form-control" placeholder="Enter username">
                <div class="error col-md-11" v-if="!$v.username.required">Field is required</div>
                <div class="error col-md-11" v-if="!$v.username.minLength">
                  Name must have at least {{$v.username.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.password.$error }">
                <input type="password" name="register-password" v-model="password"
                  class="form-control" placeholder="Enter password">
              </div>
              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.confirm.$error }">
                <input type="password" name="register-confirm" v-model="confirm"
                  class="form-control" placeholder="Confirm password">
              </div>
            </div>
            <button type="submit" class="btn btn-dark">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      confirm: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      minLength: minLength(6),
      email,
    },
    username: {
      required,
      minLength: minLength(4),
    },
    password: {
      required,
      minLength: minLength(8),
    },
    confirm: {
      sameAsPassword: sameAs('password'),
    },
  },
};
</script>
<style scoped>
.card {
  width: 40rem;
  margin: 0 auto;
  float: none;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}
</style>
