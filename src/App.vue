<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="body">
    <Header />
    <router-view />
  </div>
</template>

<style scoped>
.body{
  width: 100vw;
  height: 100vh;
}
</style>
