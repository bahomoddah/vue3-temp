<template>
  <div>
    <h3>Products</h3>
    <div v-if="products.length">
      <div>
        <ProductListItem
          v-for="(product) in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div v-else class="text-gray-600 text-center py-16">
      Your don't have products yet
    </div>
  </div>
</template>

<script setup>
import store from "../store";
import { computed } from "vue";
import ProductListItem from "../components/ProductListItem.vue";

const products = computed(() => store.state.products);

</script>
