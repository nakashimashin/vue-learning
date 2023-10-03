<script setup>
import { useStoreCounter } from '@/stores/counter';
const counter = useStoreCounter();
</script>

<template>
  <div>
    <div>Home</div>
    <p>Count:{{ counter.count }}</p>
    <p>Count2:{{ counter.count2 }}</p>
  </div>
</template>

<style scoped>
</style>
