<script setup lang="ts">
import type { EventItemInterface } from '@/interfaces/event-item.interface'
import { t } from '@/i18n'

const props = defineProps<{
    item: EventItemInterface
}>()

const balanceCount = props.item.maxCountParticipants - props.item.countParticipants
const price =
    props.item.price === 0 ? t('eventsScreen.freePrice') : t('eventsScreen.price', props.item.price)

function checkBalanceCount() {
    if (balanceCount * 10 < props.item.maxCountParticipants) return true
    return false
}

function checkParticipantsCount(item: EventItemInterface) {
    if (item.countParticipants < item.maxCountParticipants) return true
    return false
}
</script>

<template>
    <article class="events-list__item events-list-item" v-if="checkParticipantsCount(item)">
        <figure class="events-list-item__figure events-list-item-figure">
            <img :src="item.photoUrl" class="events-list-item-figure__img" :alt="item.title" />
        </figure>
        <p class="events-list-item__label" v-if="checkBalanceCount()">
            {{ t('eventsScreen.countParticipants', balanceCount) }}
        </p>
        <h3 class="events-list-item__title">{{ item.title }}</h3>
        <p class="events-list-item__text">
            {{ item.type }} /
            {{ t('eventsScreen.maxCountParticipants', item.maxCountParticipants) }} / {{ price }}
        </p>
    </article>
</template>

<style scoped>
.events-list__item {
    margin-bottom: 20px;
    position: relative;
}

.events-list__item:hover {
    cursor: pointer;
}

.events-list-item__figure {
    background-color: #ccc;
    height: 219px;
    margin-bottom: 12px;
    border-radius: 16px;
}

.events-list-item-figure__img {
    width: 100%;
    height: auto;
    max-height: 219px;
    object-fit: cover;
    border-radius: 16px;
}

.events-list-item__label {
    font-size: 12px;
    color: #f5ed28;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 6px 8px;
    border-radius: 52px;
    position: absolute;
    right: 8px;
    top: 185px;
}

.events-list-item__title {
    font-size: 18px;
    line-height: 20px;
    white-space: nowrap;
    color: #1c212d;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
}

.events-list-item__text {
    font-size: 12px;
    color: #5c647d;
}
</style>
