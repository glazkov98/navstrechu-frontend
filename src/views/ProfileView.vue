<script lang="ts">
import DefaultHeader from '@/components/header/DefaultHeader.vue'
import ProfileCard from '@/components/profile/ProfileCard.vue'
import PremiumBanner from '@/components/premium/PremiumBanner.vue'
import ProfileMenu from '@/components/profile/ProfileMenu.vue'
import { useUserStore } from '@/stores/user'
import ModalReview from '@/components/modals/ModalReview.vue'
import NavMenu from '@/components/nav/NavMenu.vue'
import { t } from '@/i18n'

export default {
    components: {
        DefaultHeader,
        ProfileCard,
        PremiumBanner,
        ProfileMenu,
        ModalReview,
        NavMenu
    },
    setup() {
        const userStore = useUserStore()
        const user = userStore.user

        return { t, user }
    }
}
</script>

<template>
    <div class="vh-100 main-content profile-screen">
        <DefaultHeader :title="t('profileScreen.title')" />
        <ProfileCard :user="user" />
        <PremiumBanner />
        <ProfileMenu />
        <ModalReview />
        <NavMenu />
    </div>
</template>
