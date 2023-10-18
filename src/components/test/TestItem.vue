<script setup lang="ts">
import type { TestItemInterface } from '@/interfaces/test-item.interface'
import TestVariantsList from './TestVariantsList.vue'
import { t } from '@/i18n'

defineProps<{
    item: TestItemInterface
}>()

const emit = defineEmits(['changeVariant'])

function setActiveVariant(value: string) {
    emit('changeVariant', value)
}
</script>

<template>
    <div class="test-item">
        <p class="test-item__text">{{ t('testScreen.numberQuestion', item.id) }}</p>
        <h1 class="test-item__title">{{ item.title }}</h1>
        <TestVariantsList
            :items="item.variants"
            :active-variant="item.activeVariant"
            @change-variant="setActiveVariant"
        />
    </div>
</template>

<style scoped>
.test-item__text {
    font-size: 14px;
    color: #000;
    margin-bottom: 4px;
}

.test-item__title {
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 24px;
}
</style>
