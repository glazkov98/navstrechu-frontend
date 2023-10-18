<script setup lang="ts">
import { t } from '@/i18n'
</script>

<template>
    <div class="side-padding">
        <div class="premium-banner" @click="$router.push({ name: 'premium' })">
            <h3 class="premium-banner__title">{{ t('premiumScreen.bannerTitle') }}</h3>
            <p class="premium-banner__text">{{ t('premiumScreen.bannerText') }}</p>
        </div>
    </div>
</template>

<style scoped>
.premium-banner {
    background: url('/src/assets/img/banner.png') no-repeat top right / 198px auto #1f66ef;
    height: 85px;
    padding: 16px;
    border: 1px solid #1f66ef;
    border-radius: 16px;
}

.premium-banner:hover {
    cursor: pointer;
}

.premium-banner__title {
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    max-width: 143px;
    margin-bottom: 4px;
}

.premium-banner__text {
    font-size: 12px;
    line-height: 13px;
    color: #ececf0;
}
</style>
