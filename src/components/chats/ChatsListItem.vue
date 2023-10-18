<script setup lang="ts">
import type { ChatItemInterface } from '@/interfaces/chat-item.interface'
import { t } from '@/i18n'

const props = defineProps<{
    item: ChatItemInterface
}>()

function isEvent() {
    return props.item.categoryId === 1
}

function isNetworking() {
    return props.item.categoryId === 3
}

function isOnline() {
    if (!props.item.isOnline) return false
    return props.item.isOnline
}

function formatDate() {
    const months = [
        t('months.jan'),
        t('months.feb'),
        t('months.mar'),
        t('months.apr'),
        t('months.may'),
        t('months.jun'),
        t('months.jul'),
        t('months.aug'),
        t('months.sep'),
        t('months.oct'),
        t('months.nov'),
        t('months.dec')
    ]

    const dateTime = props.item.dateTime
    const date = new Date()
    const day = date.getDate()
    const yesterday = new Date(date.setDate(day - 1)).getDate()
    const parseDate = Date.parse(dateTime)
    const itemDate = new Date(parseDate)
    const itemDay = itemDate.getDate()
    const itemMonth = itemDate.getMonth()

    if (day == itemDay) {
        return itemDate.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        })
    }

    if (yesterday == itemDay) {
        return t('yesterday')
    }

    return `${itemDay} ${months[itemMonth - 1]}`
}
</script>

<template>
    <div
        class="flex flex-row-nowrap flex-align-center side-padding chats-list__item chats-list-item"
    >
        <figure
            :class="{
                'chats-list-item__figure': true,
                'chats-list-item-figure': true,
                'chats-list-item__figure--is-online': isOnline()
            }"
        >
            <img
                :src="item.photoUrl"
                :class="{
                    'chats-list-item-figure__img': true,
                    'chats-list-item-figure__img--event': isEvent()
                }"
                :alt="item.name"
            />
        </figure>
        <div class="chats-list-item__content chats-list-item-content">
            <div class="flex flex-row-nowrap flex-align-center">
                <h3 class="chats-list-item-content__title">{{ item.name }}</h3>
                <p class="chats-list-item-content__label" v-if="isNetworking()">
                    {{ t('chatsScreen.labelTitle') }}
                </p>
                <p class="chats-list-item-content__date">{{ formatDate() }}</p>
            </div>
            <p
                class="chats-list-item-content__text chats-list-item-content-text"
                v-if="item.sender && item.lastMessage"
            >
                <span class="chats-list-item-content-text__blue">{{ item.sender }}:</span>
                {{ item.lastMessage }}
            </p>
            <p
                class="chats-list-item-content__text chats-list-item-content-text"
                v-else-if="item.sender && !item.lastMessage"
            >
                <span class="chats-list-item-content-text__blue">{{ item.sender }}</span>
            </p>
            <p
                class="chats-list-item-content__text chats-list-item-content-text"
                v-else-if="!item.sender && item.lastMessage"
            >
                {{ item.lastMessage }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.chats-list__item {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ececf0;
}

.chats-list__item:hover {
    cursor: pointer;
}

.chats-list__item:last-child {
    border-bottom: none;
}

.chats-list-item__figure {
    width: 48px;
    height: 48px;
    margin-right: 12px;
    position: relative;
}

.chats-list-item__figure.chats-list-item__figure--is-online::after {
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background-color: #13cb46;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
}

.chats-list-item-figure__img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
}

.chats-list-item-figure__img.chats-list-item-figure__img--event {
    border-radius: 12px;
}

.chats-list-item__content {
    flex-grow: 1;
    overflow: hidden;
}

.chats-list-item-content__title,
.chats-list-item-content__text,
.chats-list-item-content__date,
.chats-list-item-content__text {
    color: #000;
}

.chats-list-item-content__title,
.chats-list-item-content__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chats-list-item-content__title {
    font-size: 16px;
    line-height: 19px;
}

.chats-list-item-content__label,
.chats-list-item-content__date,
.chats-list-item-content__text {
    font-size: 12px;
    line-height: 14px;
}

.chats-list-item-content__label,
.chats-list-item-content-text__blue {
    color: #1f66ef;
}

.chats-list-item-content__label {
    background-color: #b8d1ff;
    margin-left: 4px;
    padding: 2px 4px;
    border-radius: 2px;
}

.chats-list-item-content__date {
    margin-left: auto;
    font-variant-numeric: lining-nums proportional-nums;
    white-space: nowrap;
}

.chats-list-item-content__text {
    margin-top: 4px;
}
</style>
