<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { MenuItemInterface } from '@/interfaces/menu-item.interface'

const props = defineProps<{
    item: MenuItemInterface
}>()

function isLogoutLink() {
    if (props.item.name == 'logout') return true
    return false
}
</script>

<template>
    <RouterLink
        :to="{ name: item.name }"
        :class="{
            flex: true,
            'flex-row-nowrap': true,
            'flex-justify-start': true,
            'flex-align-center': true,
            'side-padding': true,
            'profile-menu__item': true,
            'profile-menu-item': true,
            'profile-menu-item--logout': isLogoutLink()
        }"
    >
        <slot></slot>
        <span class="profile-menu-item__label">{{ item.label }}</span>
    </RouterLink>
</template>

<style>
.profile-menu__item {
    padding-top: 12px;
    padding-bottom: 12px;
}

.profile-menu-item__label {
    font-size: 16px;
    font-weight: 500;
    color: #06162d;
    margin-left: 12px;
}

.profile-menu__item.profile-menu-item--logout {
    margin-top: 24px;
}

.profile-menu__item.profile-menu-item--logout .profile-menu-item__label {
    color: #e51a1a;
}
</style>
