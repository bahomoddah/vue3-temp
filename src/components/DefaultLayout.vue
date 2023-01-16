
<template>
<div>
<h1>Main Deader</h1>
<div>
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            active-class="color"
            class="ma-2"
            >{{ item.name }}
          </router-link>
</div>

    <router-view :key="$route.path"></router-view>

  </div>
</template>

<script>
import { computed } from "vue";
const navigation = [
  { name: "Dashboard", to: { name: "Dashboard" } },
  { name: "products", to: { name: "Products" } },
  { name: "login", to: { name: "Login" } },
];

export default {
  setup() {
    return {
      user: computed(() => store.state.user.data),
      navigation
    };
  }
}

</script>

<style scoped>
.color {
  color: #777
}
</style>
