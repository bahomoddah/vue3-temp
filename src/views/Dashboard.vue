<template>
<div>
  Dashboard
</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const loading = computed(() => store.state.dashboard.loading);
const data = computed(() => store.state.dashboard.data);

store.dispatch("getDashboardData");
</script>

<style scoped></style>
