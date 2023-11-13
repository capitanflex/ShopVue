<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/UI/NavBar.vue";
import Footer from "@/components/UI/Footer.vue";

</script>

<template>
  <NavBar />
  <div class="app">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>

</style>
