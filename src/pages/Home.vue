<script setup>
import { useStoreCounter } from '@/stores/counter';
const counter = useStoreCounter();
</script>

<template>
  <div>
    <div>Home</div>
    <p>Count:{{ counter.count }}</p>
    <p>DoubleCount: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">Up</button>
  </div>
</template>

<style scoped>
</style>
