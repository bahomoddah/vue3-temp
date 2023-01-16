<template>
  <div @click="login">
    login
  </div>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const user = {
  email: "",
  password: "",
};
let loading = ref(false);

function login() {
  loading.value = true;
  store
    .dispatch("login", user)
    .then(() => {
      loading.value = false;
      router.push({
        name: "Dashboard",
      });
    })
    .catch((err) => {
      loading.value = false;
    });
}
</script>
