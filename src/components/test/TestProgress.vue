<script setup lang="ts">
defineProps<{
    count: number
    active: number
}>()
</script>

<template>
    <div class="flex flex-row-nowrap test-progress">
        <span
            :class="{ 'test-progress__item': true, active: n <= active }"
            v-for="n in count"
        ></span>
    </div>
</template>

<style scoped>
.test-progress {
    width: 100%;
    margin-bottom: 24px;
    padding-top: 4px;
}

.test-progress__item {
    flex: 0 1 100%;
    height: 4px;
    background-color: #d9d9d9;
    margin-right: 4px;
    border-radius: 13px;
}

.test-progress__item.active {
    background-color: #f0af1f;
}

.test-progress__item:last-child {
    margin-right: 0;
}
</style>
