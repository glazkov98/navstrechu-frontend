<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { MenuItemInterface } from '@/interfaces/menu-item.interface'

defineProps<{
    item: MenuItemInterface
}>()
</script>

<template>
    <RouterLink
        :to="{ name: item.name }"
        class="flex flex-column-nowrap flex-justify-start flex-align-center nav-menu__item nav-menu-item"
    >
        <slot></slot>
        <span class="nav-menu-item__label">{{ item.label }}</span>
    </RouterLink>
</template>

<style>
.nav-menu__item {
    text-align: center;
    padding: 7px 0 8px;
}

.nav-menu-item__label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: -0.24px;
    text-align: center;
    color: #8a90a5;
    margin-top: 4px;
}

.nav-menu-item.router-link-active .nav-menu-item__label {
    color: #1f66ef;
}

.nav-menu-item.router-link-active svg path {
    stroke: #f0af1f;
}
</style>
@/interfaces/menu-item.interface
