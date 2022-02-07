<template>
  <div class="mt-5 feature_div" id="features">
      <div class="row justify-content-center">
          <h3 class="feature_heading mt-5">What we offer</h3> 
      </div>
      <center>
          <p class="mt-3" style="color: #a5abee; font-weight: bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
              Neque porro eius eveniet tempora magnam! Blanditiis eos libero consectetur iusto quam <br>
              vitae maiores molestiae odio sapiente placeat, dolorem quis. Neque, nam!
          </p>
      </center>
      <div class="container mt-5 mb-5">
          <div class="row pb-5">
            <div class="col-md-3 mb-5">
                <div class="card feature_card animate__animated animate__fadeInLeft">
                    <i class="fa fa-window-restore"  style="font-size: 40px"/>
                    <h4 class="mt-4">File Storage</h4>
                    <p>Keep and store all your files in one place</p>
                </div>
            </div>
            <div class="col-md-3 mb-5">
                <div class="card feature_card animate__animated animate__bounce">
                    <i class="fa fa-lock"  style="font-size: 40px"/>
                    <h4 class="mt-4">Security</h4>
                    <p>Keep your files safe in the cloud</p>
                </div>
            </div>
            <div class="col-md-3 mb-5">
                <div class="card feature_card animate__animated animate__bounce">
                    <i class="fa fa-share"  style="font-size: 40px"/>
                    <h4 class="mt-4">Share</h4>
                    <p>Send the link to your files to your friends</p>
                </div>
            </div>
            <div class="col-md-3 mb-5">
                <div class="card feature_card animate__animated animate__fadeInRight">
                    <i class="fa fa-cloud-upload"  style="font-size: 40px"/>
                    <h4 class="mt-4">Cloud Storage</h4>
                    <p>Store all your files in the Cloud</p>
                </div>
            </div> 
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .feature_heading{
        color: #ffffff !important;
        font-size: 50px;
    }
    .feature_div{
        background-color: #3C61B8; 
        border-top-right-radius: 50px;
        border-top-left-radius: 50px
    }
    .feature_card{
        box-shadow: 2px 2px 5px #d8d6d6;
        border-radius: 10px;
        padding: 30px;
        height: 100%;
        color: #a5abee;
    }
    .feature_card:hover{
        background-color: #203E84;
        color: #ffffff;
    }
</style>