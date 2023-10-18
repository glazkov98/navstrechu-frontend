<script setup lang="ts">
import PremiumTariffListItem from './PremiumTariffListItem.vue'
import type { TariffItemInterface } from '@/interfaces/tariff-item.interface'
import { useTariffPlansStore } from '@/stores/tariff-plans'

const tariffStore = useTariffPlansStore()
const items: TariffItemInterface[] = tariffStore.items
</script>

<template>
    <div class="tariff-list">
        <PremiumTariffListItem v-for="item in items" :item="item" />
    </div>
</template>
