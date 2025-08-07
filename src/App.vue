<script setup>
// import {createRouter , createWebHisto}
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import CardProduct from './components/CardProduct.vue';
import productInfo from '../src/assets/productInfo.json'
import ListProduct from './components/ListProduct.vue';
// import { ref } from 'vue';


</script>

<template>

<Header />
  <main>
    <!-- <Home/> -->
     <div class="productContainer">
        <ListProduct :productInfo="productInfo"/>
        <CardProduct :productInfo="productInfo"/>
  </div>

  </main>
<Footer />
</template>

<style scoped>

.productContainer{
  display: flex;
  flex-direction: row;
}

</style>
