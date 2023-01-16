
<template>
<div>
<h1>Main Deader</h1>
<div class="px-2 pt-2 pb-3">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            active-class="bg-gray-900 text-white"
            :class="[
              this.$route.name === item.to.name
                ? ''
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
            >{{ item.name }}
          </router-link>
</div>

    <router-view :key="$route.path"></router-view>

  </div>
</template>

<script>
const navigation = [
  { name: "Dashboard", to: { name: "Dashboard" } },
  { name: "surveys", to: { name: "Surveys" } },
];

</script>
