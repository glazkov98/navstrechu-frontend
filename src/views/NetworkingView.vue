<script lang="ts">
import DefaultHeader from '@/components/header/DefaultHeader.vue'
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'
import ButtonLink from '@/components/buttons/ButtonLink.vue'
import ModalReview from '@/components/modals/ModalReview.vue'
import NavMenu from '@/components/nav/NavMenu.vue'
import { t } from '@/i18n'

export default {
    components: {
        DefaultHeader,
        ButtonBlue,
        ButtonLink,
        ModalReview,
        NavMenu
    },
    setup() {
        return { t }
    }
}
</script>

<template>
    <div class="vh-100 main-content networking-screen">
        <DefaultHeader :title="t('networkingScreen.title')" />
        <div class="side-padding container networking-content">
            <figure class="networking-content__figure networking-content-figure">
                <img
                    src="@/assets/img/networking.png"
                    class="networking-content-figure__img"
                    :alt="t('networkingScreen.imgAlt')"
                />
            </figure>
            <h2 class="text-center networking-content__title">
                {{ t('networkingScreen.contentTitle') }}
            </h2>
            <ButtonBlue @click="$router.push({ name: 'test' })">
                {{ t('networkingScreen.fillForm') }}
            </ButtonBlue>
            <ButtonLink class="networking-content__btn-link">
                {{ t('networkingScreen.howWork') }}
            </ButtonLink>
        </div>
        <ModalReview />
        <NavMenu />
    </div>
</template>

<style>
.networking-content {
    margin-top: 20%;
}

.networking-content__figure {
    width: 288px;
    height: 270px;
    margin: 0 auto;
}

.networking-content-figure__img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
}

.networking-content__title {
    font-size: 18px;
    line-height: 22px;
    max-width: 343px;
    margin: 0 auto 20px;
}

.networking-content__btn-link {
    margin-top: 12px;
}
</style>
