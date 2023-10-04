<script setup>
    import { onMounted, ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useStoreProducts } from '@/stores/products';

    const { productss } = storeToRefs(useStoreProducts());
    const { getProducts } = useStoreProducts();

    onMounted(() => {
        getProducts();
    });
</script>

<template>
    <div>
        <h1>Pina入門カート(カート)</h1>
        <hr />
        <h2>商品一覧</h2>
        <ul>
            <li v-for="product in productss" :key="product.id">
                {{ product.title }} - ¥{{ product.price.toLocaleString() }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
