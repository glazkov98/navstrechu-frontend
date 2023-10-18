<script setup lang="ts">
import ButtonCommon from './ButtonCommon.vue'

defineProps<{
    disabled?: boolean
}>()
</script>

<template>
    <ButtonCommon class="btn-blue" :disabled="disabled">
        <slot></slot>
    </ButtonCommon>
</template>

<style>
.btn.btn-blue {
    color: #fff;
    background-color: #0c50ff;
}
</style>
