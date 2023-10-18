<script setup lang="ts">
import ButtonCommon from './ButtonCommon.vue'
</script>

<template>
    <ButtonCommon class="btn-gray">
        <slot></slot>
    </ButtonCommon>
</template>

<style>
.btn.btn-gray {
    color: #17233d;
    background-color: #f4f4f6;
}
</style>
