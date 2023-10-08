<script setup>
import { useStoreCounter } from '@/stores/counter';
import { useStoreHeader } from '@/stores/header';
import Header from '@/components/Header.vue';
const counter = useStoreCounter();

</script>

<template>
  <div class="body">
    <Header />
    <div>
      <div>Home</div>
      <p>Count:{{ counter.count }}</p>
      <p>DoubleCount: {{ counter.doubleCount }}</p>
      <button @click="counter.increment()">Up</button>
      <button @click="counter.$reset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.body{
  height: 100vh;
  width: 100vw;
}
</style>
