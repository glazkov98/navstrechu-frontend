<script setup lang="ts">
import ButtonCommon from './ButtonCommon.vue'
</script>

<template>
    <ButtonCommon class="btn-icon">
        <slot></slot>
    </ButtonCommon>
</template>

<style>
.btn.btn-icon {
    width: 44px;
    padding: 10px;
    background-color: #f4f4f6;
}
</style>
