<template>
  <div>
    name : {{ product.name }} 
    <br>
    price : {{ product.price }}
  </div>
</template>

<script setup>
const { product } = defineProps({
  product: Object,
});
</script>

<style></style>
