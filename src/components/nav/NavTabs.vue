<script setup lang="ts">
import { ref } from 'vue'
import NavTabsItem from './NavTabsItem.vue'
import type { NavTabsItemInterface } from '@/interfaces/nav-tabs-item.interface'

const emit = defineEmits(['handleTab'])

const props = defineProps<{
    items: NavTabsItemInterface[]
    active: number
}>()

const active = ref(props.active)
function handleTab(id: number) {
    active.value = id
    emit('handleTab', id)
}
</script>

<template>
    <nav class="flex flex-row-nowrap side-padding hide-scrollbar nav-tabs">
        <NavTabsItem
            v-for="item in items"
            :active="active"
            :item="item"
            @handle-tab="handleTab"
        ></NavTabsItem>
    </nav>
</template>

<style scoped>
.nav-tabs {
    width: 100%;
    overflow-x: auto;
}
</style>
