<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <header class="side-padding default-header">
        <h1 class="h2 default-header__title">{{ title }}</h1>
    </header>
</template>

<style scoped>
.default-header {
    margin-bottom: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
