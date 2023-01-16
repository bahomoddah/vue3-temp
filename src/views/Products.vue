<template>
  <div>
    <h3>Products</h3>
    <div v-if="products.length">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <ProductListItem
          v-for="(product, ind) in products"
          :key="product.id"
          :product="product"
          class="opacity-0 animate-fade-in-down"
          :style="{ animationDelay: `${ind * 0.1}s` }"
          @delete="deleteproduct(product)"
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

store.dispatch("getProducts");

function deleteProduct(product) {
    store.dispatch("deleteProduct", product.id).then(() => {
      store.dispatch("getProducts");
    });
}

</script>
