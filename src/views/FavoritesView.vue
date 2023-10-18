<script lang="ts">
import DefaultHeader from '@/components/header/DefaultHeader.vue'
import NotFoundTitle from '@/components/common/NotFoundTitle.vue'
import ModalReview from '@/components/modals/ModalReview.vue'
import NavMenu from '@/components/nav/NavMenu.vue'
import { t } from '@/i18n'

export default {
    components: {
        DefaultHeader,
        NotFoundTitle,
        ModalReview,
        NavMenu
    },
    setup() {
        return { t }
    }
}
</script>

<template>
    <div class="vh-100 main-content favorites-screen">
        <DefaultHeader :title="t('favoritesScreen.title')" />
        <NotFoundTitle :title="t('favoritesScreen.notFoundTitle')" class="side-padding" />
        <ModalReview />
        <NavMenu />
    </div>
</template>
