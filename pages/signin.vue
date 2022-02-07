<template>
  <div class="body">
      <nav-bar />
      <sign-in :submitForm="loginUser" />
  </div>
</template>

<script>
export default {
    methods:{
         loginUser(loginInfo){
             this.$auth.loginWith('local', {
                 data: loginInfo
             }).then(window.location.href='/')
             //alert('You pressed a button')
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