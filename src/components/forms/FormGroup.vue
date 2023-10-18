<script setup lang="ts"></script>

<template>
    <div class="form-group">
        <slot></slot>
    </div>
</template>

<style scoped>
.form-group {
    margin-bottom: 16px;
}

.form-group:last-child {
    margin-bottom: 0;
}
</style>
