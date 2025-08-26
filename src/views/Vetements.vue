<script setup>
import ListProduct from '../components/ListProduct.vue';
import CardProduct from '../components/CardProduct.vue';
import productInfo from '../assets/productInfo.json';
</script>

<template>
  <div class="vetements-page">
    <ListProduct :productInfo="productInfo" />
    <CardProduct :productInfo="productInfo" />
  </div>
</template>

<style scoped>
.vetements-page {
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: white;
  margin-bottom: 50px;
  /* border: 1px solid red; */
}
</style>
