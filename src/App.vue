<template>

  <div class="app">
    <NavBar />
    <RouterView />
    <Footer />
  </div>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/UI/Header.vue";
import Footer from "@/components/UI/Footer.vue";
import {useUserStore} from "@/stores/usersStore";

const userStore = useUserStore();
userStore.checkUserAuth();

</script>

<style scoped>
.app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
