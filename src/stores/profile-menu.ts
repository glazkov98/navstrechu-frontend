import { ref, shallowRef, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuItemInterface } from '@/interfaces/menu-item.interface'
import IconAchievements from '@/components/icons/IconAchievements.vue'
import IconMe from '@/components/icons/IconMe.vue'
import IconHistory from '@/components/icons/IconHistory.vue'
import IconAbout from '@/components/icons/IconAbout.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import { t } from '@/i18n'

export const useProfileMenuStore = defineStore('profile-menu', () => {
    const items: Ref<MenuItemInterface[]> = ref([
        {
            name: 'achievements',
            label: t('profileScreen.menu.achievements'),
            icon: shallowRef(IconAchievements)
        },
        {
            name: 'me',
            label: t('profileScreen.menu.me'),
            icon: shallowRef(IconMe)
        },
        {
            name: 'history',
            label: t('profileScreen.menu.history'),
            icon: shallowRef(IconHistory)
        },
        {
            name: 'about',
            label: t('profileScreen.menu.about'),
            icon: shallowRef(IconAbout)
        },
        {
            name: 'logout',
            label: t('profileScreen.menu.logout'),
            icon: shallowRef(IconLogout)
        }
    ])

    return { items }
})
