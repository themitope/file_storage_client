<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <nuxt-link class="navbar-brand" to="/"><img src="@/static/images/logo.png"/></nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item nav_item mt-3 mr-4">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item nav_item mt-3 mr-4">
                    <a class="nav-link" href="#features">Features</a>
                </li>
                <li class="nav-item nav_item mt-3 mr-4">
                    <a class="nav-link" href="#pricing">Pricing</a>
                </li>
                <li class="nav-item nav_item mt-3 mr-4">
                    <nuxt-link class="nav-link" to="/signin">Signin</nuxt-link>
                </li>
                <li class="nav-item nav_item mt-2 mr-4">
                    <nuxt-link class="nav-link" to="/signup">
                        <button class="btn btn-primary nav_btn">Get started</button>
                    </nuxt-link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav_item a{
        color: #203E84 !important;
        font-weight: 500;
        font-size: 16px;
    }
    .nav_btn{
        background-color: #3C61B8;
        border: #3C61B8;
        border-radius: 10px;
    }
</style>