import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { NavTabsItemInterface } from '@/interfaces/nav-tabs-item.interface'
import { t } from '@/i18n'

export const useEventsTabsStore = defineStore('events-tabs', () => {
    const activeTab = ref(0)
    const items: Ref<NavTabsItemInterface[]> = ref([
        {
            id: 0,
            name: t('eventsScreen.tabs.all')
        },
        {
            id: 1,
            name: t('eventsScreen.tabs.immediate')
        },
        {
            id: 2,
            name: t('eventsScreen.tabs.friends')
        },
        {
            id: 3,
            name: t('eventsScreen.tabs.events')
        },
        {
            id: 4,
            name: t('eventsScreen.tabs.one')
        }
    ])

    function setActiveTab(id: number) {
        activeTab.value = id
    }

    return { items, activeTab, setActiveTab }
})
