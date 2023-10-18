<script lang="ts">
import ButtonsHeader from '@/components/header/ButtonsHeader.vue'
import NavTabs from '@/components/nav/NavTabs.vue'
import { t } from '@/i18n'
import { useEventsTabsStore } from '@/stores/events-tabs'
import { useEventsStore } from '@/stores/events'
import type { NavTabsItemInterface } from '@/interfaces/nav-tabs-item.interface'
import EventsList from '@/components/events/EventsList.vue'
import type { EventItemInterface } from '@/interfaces/event-item.interface'
import { ref, type Ref } from 'vue'
import ModalReview from '@/components/modals/ModalReview.vue'
import NavMenu from '@/components/nav/NavMenu.vue'

export default {
    components: {
        ButtonsHeader,
        NavTabs,
        EventsList,
        ModalReview,
        NavMenu
    },
    setup() {
        const tabsStore = useEventsTabsStore()
        const eventsStore = useEventsStore()
        const countEvents = eventsStore.countEvents()
        const tabs: NavTabsItemInterface[] = tabsStore.items
        const activeTab = tabsStore.activeTab
        let events: Ref<EventItemInterface[]> = ref(
            activeTab === 0 ? eventsStore.items : eventsStore.filterEvents()
        )

        function filterEvents(id: number) {
            tabsStore.setActiveTab(id)

            if (id === 0) {
                events.value = eventsStore.items
                return
            }

            events.value = eventsStore.filterEvents()
        }

        return { t, countEvents, tabs, events, activeTab, filterEvents }
    }
}
</script>

<template>
    <div class="vh-100 main-content events-screen">
        <ButtonsHeader
            :title="t('eventsScreen.pageTitle', countEvents)"
            :text="t('eventsScreen.subtitle')"
        />
        <NavTabs :items="tabs" :active="activeTab" @handle-tab="filterEvents" />
        <EventsList :items="events" class="container" />
        <ModalReview />
        <NavMenu />
    </div>
</template>
