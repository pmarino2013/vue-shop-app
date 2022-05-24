<script setup>
import ProductCard from "./components/ProductCard.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>ShirtShop</h1>
        <hr />
      </div>
    </div>
    <div class="row">
      <ProductCard />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

  margin-top: 60px;
}
</style>
