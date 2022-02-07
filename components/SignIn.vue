<template>
  <div class="row justify-content-center">
      <div class="card">
          <div class="container">
              <div class="row justify-content-center">
                    <img src="@/static/images/logo.png"/>
              </div>
              <div class="row justify-content-center">
                <p class="mt-3" style="color: #a5abee">Login to your Account</p>
              </div>
              <div>
                  <form action="" method="post">
                      <div class="mt-2">
                          <label for="">Email Address</label>
                          <input type="email" name="email" id="" placeholder="Email Address" class="form-control" v-model="userInfo.email">
                      </div>
                      <div class="mt-2">
                          <label for="">Password</label>
                          <input type="password" name="password" id="" placeholder="Password" class="form-control" v-model="userInfo.password">
                      </div>
                      <div class="mt-4 row justify-content-center">
                          <input type="submit" value="Login" class="btn get_started_btn" @click.prevent="submitForm(userInfo)">
                      </div>
                  </form>
                  <div class="mt-4 row justify-content-center">
                      <p>Create a new Account <a href="/signup">here</a> </p>
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
                email: '',
                password: ''
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