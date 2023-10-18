<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import router from '@/router'

const props = defineProps<{
    backName: string | null
}>()

const emit = defineEmits(['handle'])

function dispatchAction() {
    emit('handle')
    if (props.backName !== null) router.push({ name: props.backName })
}
</script>

<template>
    <header class="back-header">
        <div class="flex flex-justify-start">
            <button class="side-padding back-header__btn" @click="dispatchAction">
                <IconArrowLeft />
            </button>
        </div>
    </header>
</template>

<style>
.back-header {
    position: relative;
    z-index: 1;
}

.back-header.icon-black .back-header__btn svg path {
    stroke: #17233d;
}

.back-header__btn {
    padding-top: 10px;
    padding-bottom: 14px;
    background-color: transparent;
}

.back-header__btn svg {
    display: block;
}
</style>
