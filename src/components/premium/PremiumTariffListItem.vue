<script setup lang="ts">
import type { TariffItemInterface } from '@/interfaces/tariff-item.interface'
import CardCommon from '@/components/cards/CardCommon.vue'
import ButtonCP from '@/components/buttons/ButtonCP.vue'
import { t } from '@/i18n'

defineProps<{
    item: TariffItemInterface
}>()
</script>

<template>
    <CardCommon class="tariff-list__item tariff-list-item">
        <h3 class="tariff-list-item__title">{{ item.title }}</h3>
        <ul class="tariff-list-item__list tariff-list-item-list">
            <li class="tariff-list-item-list__item" v-for="listItem in item.list">
                {{ listItem }}
            </li>
        </ul>
        <ButtonCP
            :amount="item.price"
            :description="t('premiumScreen.payments', { title: item.title })"
            :text="t('premiumScreen.btnPrice', item.price)"
            class="lining-nums tariff-list-item__btn"
            @pay="$router.push({ name: 'profile' })"
        />
    </CardCommon>
</template>

<style scoped>
.tariff-list__item {
    margin-bottom: 16px;
}

.tariff-list__item:last-child {
    margin-bottom: 0;
}

.tariff-list-item__title,
.tariff-list-item__list {
    margin-bottom: 12px;
}

.tariff-list-item-list__item {
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 5px;
    padding-left: 22px;
    position: relative;
}

.tariff-list-item-list__item::before {
    display: block;
    content: '';
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #06162d;
    position: absolute;
    top: 7px;
    left: 11px;
}

.tariff-list-item-list__item:last-child {
    margin-bottom: 0;
}
</style>
