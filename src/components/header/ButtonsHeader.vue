<script setup lang="ts">
import ButtonIcon from '@/components/buttons/ButtonIcon.vue'
import IconMap from '@/components/icons/IconMap.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

defineProps<{
    title: string
    text: string
}>()
</script>

<template>
    <header
        class="flex flex-row-nowrap flex-justify-between flex-align-center side-padding buttons-header"
    >
        <div class="buttons-header__content">
            <p class="buttons-header__text">{{ text }}</p>
            <h1 class="h2 buttons-header__title">{{ title }}</h1>
        </div>
        <div class="buttons-header__buttons buttons-header-buttons">
            <ButtonIcon>
                <IconMap />
            </ButtonIcon>
            <ButtonIcon>
                <IconSearch />
            </ButtonIcon>
        </div>
    </header>
</template>

<style scoped>
.buttons-header {
    margin-bottom: 16px;
    padding-top: 8px;
    padding-bottom: 0;
}

.buttons-header__title {
    font-family: 'Comfortaa';
    line-height: 26px;
}

.buttons-header__text {
    font-size: 14px;
    line-height: 16px;
    color: #5c647d;
    margin-bottom: 4px;
}

.buttons-header__buttons {
    height: 44px;
}

.buttons-header-buttons > * {
    margin-right: 8px;
}

.buttons-header-buttons > *:last-child {
    margin-right: 0;
}
</style>
