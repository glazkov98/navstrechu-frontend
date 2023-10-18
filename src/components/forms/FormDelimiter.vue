<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<template>
    <div class="text-center form-delimiter">
        <span class="form-delimiter__text">{{ text }}</span>
    </div>
</template>

<style scoped>
.form-delimiter {
    font-size: 14px;
    line-height: 20px;
    color: #a7acbc;
    position: relative;
}

.form-delimiter::before {
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #a7acbc;
    position: absolute;
    top: 50%;
}

.form-delimiter__text {
    display: inline-block;
    background-color: #fff;
    padding: 0 4px;
    position: relative;
    z-index: 1;
}
</style>
