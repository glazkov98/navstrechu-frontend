<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <h2 class="text-center not-found-title">{{ title }}</h2>
</template>

<style scoped>
.not-found-title {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>
