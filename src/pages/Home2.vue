<script setup>
import { useStoreCounter2 } from '../stores/counter2';
const counter = useStoreCounter2();
</script>

<template>
  <div>
    <div>Home2</div>
    <p>Count:{{ counter.count }}</p>
    <p>DoubleCount: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">Up</button>
  </div>
</template>

<style scoped>
</style>
