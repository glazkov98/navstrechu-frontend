import { ref, shallowRef, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuItemInterface } from '@/interfaces/menu-item.interface'
import IconEvents from '@/components/icons/IconEvents.vue'
import IconNetworking from '@/components/icons/IconNetworking.vue'
import IconChats from '@/components/icons/IconChats.vue'
import IconFavorites from '@/components/icons/IconFavorites.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import { t } from '@/i18n'

export const useMenuStore = defineStore('menu', () => {
    const show: Ref<boolean> = ref(true)
    const items: Ref<MenuItemInterface[]> = ref([
        {
            name: 'events',
            label: t('menu.events'),
            icon: shallowRef(IconEvents)
        },
        {
            name: 'networking',
            label: t('menu.networking'),
            icon: shallowRef(IconNetworking)
        },
        {
            name: 'chats',
            label: t('menu.chats'),
            icon: shallowRef(IconChats)
        },
        {
            name: 'favorites',
            label: t('menu.favorites'),
            icon: shallowRef(IconFavorites)
        },
        {
            name: 'profile',
            label: t('menu.profile'),
            icon: shallowRef(IconProfile)
        }
    ])

    function isShow() {
        return show.value
    }

    function showMenu() {
        show.value = true
    }

    function hideMenu() {
        show.value = false
    }

    return { items, isShow, showMenu, hideMenu }
})
