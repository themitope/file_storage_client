<template>
    <div class="container hero_class">
      <div class="row">
        <div class="col-md-6 mt-5">
          <span class="manage animate__animated animate__bounceInLeft">Manage </span><vue-typer text='all your files in one place' class='typewriter animate__animated animate__bounceInLeft' erase-style='clear'></vue-typer>
          <p class="mt-4" style="color: #a5abee; font-weight: bold">A comfortable way to have access to <br> all your file</p>
          <form action="" class="mt-5">
            <div class="my_form">
              <input type="email" class="get_started_email" placeholder="Email Address">
              <input type="submit" value="Get Started" class="get_started_btn">
            </div>
          </form>
        </div>
        <div class="col-md-6">
            <img src="@/static/images/drive_image_bg.png" alt="" class="img-fluid">
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .manage{
    color: #203E84 !important;
    font-size: 65px;
  }
  .typewriter, .custom.char{
    color: #3C61B8 !important;
    font-size: 63px;
    /* font-weight: 500; */
  }
  .hero_class{
    margin-top: 5%;
  }
  .get_started_btn{
    background-color: #3C61B8;
    border: #3C61B8;
    border-radius: 10px;
    color: #fff;
    padding: 8px 15px;
  }
  .get_started_email, input:focus{
    border: none;
    width: 70%;
    padding: 5px 10px;
  }
  .my_form{
    padding: 10px 5px;
    width: 70%;
    background-color: #fff;
    box-shadow: 2px 2px 5px #d8d6d6;
    border-radius: 10px;
  }
</style>