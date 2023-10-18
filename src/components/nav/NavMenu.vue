<script setup lang="ts">
import NavMenuItem from './NavMenuItem.vue'
import type { MenuItemInterface } from '@/interfaces/menu-item.interface'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'

const menuStore = useMenuStore()
const userStore = useUserStore()
const items: MenuItemInterface[] = menuStore.items

function isShowMenu() {
    return userStore.isLogin()
}
</script>

<template>
    <nav class="max-content container nav-menu" v-if="isShowMenu()">
        <div class="flex flex-row-nowrap nav-menu__wrapper">
            <NavMenuItem v-for="item in items" :item="item">
                <component :is="item.icon"></component>
            </NavMenuItem>
        </div>
    </nav>
</template>

<style scoped>
.nav-menu {
    background-color: #fff;
    width: 100%;
    border-top: 1px solid rgba(60, 60, 67, 0.36);
    position: fixed;
    bottom: 0;
}

.platform-ios .nav-menu {
    padding-bottom: 30px;
}

.nav-menu__wrapper > * {
    flex: 0 1 20%;
}
</style>
