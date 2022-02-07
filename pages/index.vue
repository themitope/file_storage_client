<template>
  <div class="body">
    <nav-bar />
    <hero />
    <features />
    <pricing />
    <my-footer />
  </div>
</template>

<script>
import Features from '../components/Features.vue'
import MyFooter from '../components/MyFooter.vue'
import NavBar from '../components/NavBar.vue'
import Pricing from '../components/Pricing.vue'
  export default {
  components: { Features, Pricing, MyFooter },}
</script>

<style>
  .body{
    background-image: linear-gradient(to right, #fcfeff 60%, #d8e0f2);
    overflow-x: hidden;
    /* background-color: #fcfdff; */
    font-family: 'Overlock';
  }
</style>