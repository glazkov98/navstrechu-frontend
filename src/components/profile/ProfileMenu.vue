<script setup lang="ts">
import ProfileMenuItem from './ProfileMenuItem.vue'
import type { MenuItemInterface } from '@/interfaces/menu-item.interface'
import { useProfileMenuStore } from '@/stores/profile-menu'

const menuStore = useProfileMenuStore()
const items: MenuItemInterface[] = menuStore.items
</script>

<template>
    <div class="profile-menu">
        <ProfileMenuItem v-for="item in items" :item="item">
            <component :is="item.icon"></component>
        </ProfileMenuItem>
    </div>
</template>

<style scoped>
.profile-menu {
    margin-top: 24px;
}
</style>
