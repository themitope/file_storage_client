<template>
  <div class="row justify-content-center">
      <div class="card">
          <div class="container">
              <div class="row justify-content-center">
                    <img src="@/static/images/logo.png"/>
              </div>
              <div class="row justify-content-center">
                <p class="mt-3" style="color: #a5abee">Create an Account with us</p>
              </div>
              <div>
                  <form action="">
                      <div>
                          <label for="">First Name</label>
                          <input type="text" name="first_name" id="" placeholder="First Name" class="form-control" v-model="userInfo.first_name">
                      </div>
                      <div class="mt-2">
                          <label for="">Last Name</label>
                          <input type="text" name="last_name" id="" placeholder="Last Name" class="form-control" v-model="userInfo.last_name">
                      </div>
                      <div class="mt-2">
                          <label for="">Email Address</label>
                          <input type="email" name="email" id="" placeholder="Email Address" class="form-control" v-model="userInfo.email">
                      </div>
                      <div class="mt-2">
                          <label for="">Password</label>
                          <input type="password" name="password" id="" placeholder="Password" class="form-control" v-model="userInfo.password">
                      </div>
                      <div class="mt-2">
                          <label for="">Confirm Password</label>
                          <input type="password" name="password_confirmation" id="" placeholder="Confirm Password" class="form-control" v-model="userInfo.password_confirmation">
                      </div>
                      <div class="mt-4 row justify-content-center">
                          <input type="submit" value="Create Account" class="btn get_started_btn" @click="submitForm(userInfo)">
                      </div>
                  </form>
                  <div class="mt-4 row justify-content-center">
                      <p>Already have an account? Login <a href="/signin">here</a> </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            valid: false,
            userInfo:{
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
        }
    },
    props: ['submitForm']
}
</script>

<style scoped>
    .card{
        margin-top: 5%;
        margin-bottom: 5%;
        box-shadow: 10px 10px 20px #d8d6d6;
        padding: 15px;
        width: 470px;
    }
    .get_started_btn{
        background-color: #3C61B8;
        border: #3C61B8;
        border-radius: 10px;
        color: #fff;
        padding: 8px 15px;
    }
</style>