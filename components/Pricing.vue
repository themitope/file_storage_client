<template>
    <div class="mb-5" id="pricing">
        <div class="row justify-content-center">
            <!-- <h3 class="mt-3 manage">Pricing</h3> -->
        </div>
        <div class="container">
            <div class="cards_container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mt-5">
                            <div class="cards">
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <img src="@/static/images/card_image1.png" alt="">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row mt-2">
                                            <span class="badge my_badge rounded-pill text-dark">BASIC</span>
                                        </div>
                                        <div class="mt-2">
                                            <div class="font-weight-bold" style="color: #a5abee; font-size: 20px">25GB</div>
                                            <div>FREE</div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <p style="color: #a5abee;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur perspiciatis iste, voluptatum</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor sit amet</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <div class="row justify-content-center mt-4">
                                    <button class="btn get_started_btn">Start Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="my_card">
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <img src="@/static/images/card_image2.png" alt="">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row mt-2">
                                            <span class="badge bg-primary rounded-pill text-white" style="padding: 5px 15px;">ESSENTIAL</span>
                                        </div>
                                        <div class="mt-2">
                                            <div class="font-weight-bold" style="color: #a5abee; font-size: 20px">100GB</div>
                                            <div class="text-white">$50</div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <p style="color: #a5abee;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur perspiciatis iste, voluptatum</p>
                                <p class="text-white"><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <p class="text-white"><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor sit amet</p>
                                <p class="text-white"><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <p class="text-white"><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <p class="text-white"><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <div class="ml-3 mr-3 row justify-content-center mt-5">
                                    <button class="btn get_started_btn btn-block">Start Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-5">
                            <div class="cards">
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <img src="@/static/images/card_image3.png" alt="">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row mt-2">
                                            <span class="badge my_badge rounded-pill text-dark">PREMIUM</span>
                                        </div>
                                        <div class="mt-2">
                                            <div class="font-weight-bold" style="color: #a5abee; font-size: 20px">200GB</div>
                                            <div>$100</div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <p style="color: #a5abee;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur perspiciatis iste, voluptatum</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor sit amet</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <p><span class="text-success">&#10004;</span>&nbsp; Lorem ipsum dolor</p>
                                <div class="row justify-content-center mt-4">
                                    <button class="btn get_started_btn">Start Now</button>
                                </div>
                            </div>
                        </div>
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

<style scoped>
    .pricing_heading{
        color: #203E84 !important;
        font-size: 50px;
    }
    .cards_container{
        box-shadow: 10px 10px 20px #d8d6d6;
        border-radius: 10px;
        background-color: #ffffff;
    }
    .my_badge{
        border: 1px solid #aaaaaa;
        padding: 5px 15px;
        font-size: 13px;
    }
    .my_card{
        background-color: #203E84;
        border-radius: 20px;
        padding: 15px;
        height: 100%;
        box-shadow: 10px 10px 20px #d8d6d6;
    }
    .cards{
        padding: 15px;
        height: 80%;
    }
</style>