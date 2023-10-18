<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <main class="main">
        <RouterView v-slot="{ Component, route }">
            <Transition :name="`${route.meta.transition || ''}`">
                <component :is="Component"></component>
            </Transition>
        </RouterView>
    </main>
</template>

<style>
@media screen and (max-width: 576px) {
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition: transform 0.5s;
    }

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .slide-left-enter-active,
    .slide-right-leave-active {
        z-index: 1;
    }

    .slide-left-enter-from,
    .slide-right-leave-to {
        transform: translateX(100%);
    }

    .slide-left-leave-from,
    .slide-left-enter-to,
    .slide-right-enter-to,
    .slide-right-leave-from {
        transform: translateX(0);
    }

    .slide-left-leave-to,
    .slide-right-enter-from {
        transform: translateX(-50%);
    }
}
</style>
