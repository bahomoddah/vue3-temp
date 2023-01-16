<template>
  <div>
  {{ product.name }}
  </div>
</template>

<script setup>
const { product } = defineProps({
  product: Object,
});
</script>

<style></style>
