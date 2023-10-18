<script lang="ts">
import PremiumTariffList from '@/components/premium/PremiumTariffList.vue'
import BackHeader from '@/components/header/BackHeader.vue'
import { t } from '@/i18n'

export default {
    components: {
        BackHeader,
        PremiumTariffList
    },
    setup() {
        return { t }
    }
}
</script>

<template>
    <div class="vh-100 premium-screen">
        <BackHeader backName="profile" />
        <div class="premium-content">
            <img
                src="/src/assets/img/premium-bg.png"
                class="premium-content__img"
                aria-hidden="true"
                alt="{{ t('premiumScreen.contentTitle') }}"
            />
            <div class="side-padding">
                <h1 class="premium-content__title">{{ t('premiumScreen.contentTitle') }}</h1>
                <p class="premium-content__text">{{ t('premiumScreen.contentText') }}</p>
                <PremiumTariffList />
            </div>
        </div>
    </div>
</template>

<style>
.premium-screen {
    background-color: #1f66ef;
}

.premium-content {
    background-color: #1f66ef;
    padding-bottom: 187px;
}

.premium-content__img {
    width: 100%;
    height: auto;
    margin-top: -48px;
    object-fit: contain;
}

.premium-content__title,
.premium-content__text {
    color: #fff;
}

.premium-content__title {
    margin-bottom: 16px;
}

.premium-content__text {
    font-size: 16px;
    font-weight: 500;
    max-width: 300px;
    margin-bottom: 32px;
}
</style>
