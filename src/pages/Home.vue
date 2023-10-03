<script setup>
import { useStoreCounter } from '@/stores/counter';
const counter = useStoreCounter();
</script>

<template>
  <div>
    <div>Home</div>
    <p>Count:{{ counter.count }}</p>
    <p>Count2:{{ counter.count2 }}</p>
    <button @click="counter.increment()">Up</button>
  </div>
</template>

<style scoped>
</style>
