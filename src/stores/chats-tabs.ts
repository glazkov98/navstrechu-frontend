import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { NavTabsItemInterface } from '@/interfaces/nav-tabs-item.interface'
import { t } from '@/i18n'

export const useChatsTabsStore = defineStore('chats-tabs', () => {
    const activeTab = ref(0)
    const items: Ref<NavTabsItemInterface[]> = ref([
        {
            id: 0,
            name: t('chatsScreen.tabs.all')
        },
        {
            id: 1,
            name: t('chatsScreen.tabs.events')
        },
        {
            id: 2,
            name: t('chatsScreen.tabs.personal')
        },
        {
            id: 3,
            name: t('chatsScreen.tabs.networking')
        }
    ])

    function setActiveTab(id: number) {
        activeTab.value = id
    }

    return { items, activeTab, setActiveTab }
})
