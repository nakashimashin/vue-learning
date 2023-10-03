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
    <button @click="counter.$reset">Reset</button>
  </div>
</template>

<style scoped>
</style>
