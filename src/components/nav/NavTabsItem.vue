<script setup lang="ts">
import type { NavTabsItemInterface } from '@/interfaces/nav-tabs-item.interface'

defineProps<{
    item: NavTabsItemInterface
    active: number
}>()
</script>

<template>
    <button
        :class="{ active: item.id == active, 'nav-tabs__item': true }"
        @click="$emit('handleTab', item.id)"
    >
        {{ item.name }}
    </button>
</template>

<style scoped>
.nav-tabs__item {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    color: #1c212d;
    background-color: #f4f4f6;
    margin-right: 4px;
    padding: 10px 16px;
    border-radius: 39px;
}

.nav-tabs__item:hover {
    cursor: pointer;
}

.nav-tabs__item:last-child {
    margin-right: 0;
}

.nav-tabs__item.active {
    color: #ffffff;
    background-color: #0c50ff;
}
</style>
