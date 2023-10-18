<script setup lang="ts">
import ButtonCommon from './ButtonCommon.vue'
</script>

<template>
    <ButtonCommon class="btn-yellow">
        <slot></slot>
    </ButtonCommon>
</template>

<style>
.btn.btn-yellow {
    color: #17233d;
    background-color: #f0af1f;
}
</style>
