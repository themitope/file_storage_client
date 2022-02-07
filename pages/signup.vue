<template>
  <div class="body">
      <nav-bar />
      <sign-up :submitForm="registerUser" />
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'
export default {
  components: { SignUp },
  methods:{
    registerUser(registerInfo){
      this.$axios.post('/register', registerInfo)
      this.$auth.loginWith('local', {
        data: registerInfo
      })
      alert('You pressed a button')
    }
  }
}
</script>

<style>
    .body{
        background-image: linear-gradient(to right, #fcfeff 60%, #d8e0f2);
        overflow-x: hidden;
        /* background-color: #fcfdff; */
        font-family: 'Overlock';
    }
</style>