<script setup lang="ts">
import type { TestVariantItemInterface } from '@/interfaces/test-variant-item.interface'
import InputRadio from '../inputs/InputRadio.vue'
import FormGroup from '../forms/FormGroup.vue'

defineProps<{
    items: TestVariantItemInterface[]
    activeVariant: number | null
}>()

const emit = defineEmits(['changeVariant'])

function changeVariant(event: Event) {
    emit('changeVariant', (event.target as HTMLInputElement).value)
}
</script>

<template>
    <form>
        <FormGroup v-for="item in items">
            <InputRadio
                name="variant"
                :label="item.title"
                :value="item.id"
                :checked="item.id === activeVariant"
                @input="changeVariant"
            />
        </FormGroup>
    </form>
</template>
