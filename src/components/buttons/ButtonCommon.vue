<script setup lang="ts">
defineProps<{
    disabled?: boolean
}>()
</script>

<template>
    <button class="btn" :disabled="disabled ? true : false">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    width: 100%;
    height: 44px;
    padding: 10px 32px;
    border-radius: 8px;
}

.btn[disabled] {
    opacity: 0.5;
}

.btn:hover {
    cursor: pointer;
}

.btn[disabled]:hover {
    cursor: default;
}
</style>
