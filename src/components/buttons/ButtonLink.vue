<script setup lang="ts">
import ButtonCommon from './ButtonCommon.vue'
</script>

<template>
    <ButtonCommon class="btn-link">
        <slot></slot>
    </ButtonCommon>
</template>

<style>
.btn.btn-link {
    display: block;
    color: #1f66ef;
    background-color: transparent;
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 4px;
}
</style>
