<script lang="ts">
import DefaultHeader from '@/components/header/DefaultHeader.vue'
import NavTabs from '@/components/nav/NavTabs.vue'
import type { NavTabsItemInterface } from '@/interfaces/nav-tabs-item.interface'
import { useChatsTabsStore } from '@/stores/chats-tabs'
import { useChatsStore } from '@/stores/chats'
import { ref, type Ref } from 'vue'
import type { ChatItemInterface } from '@/interfaces/chat-item.interface'
import ChatsList from '@/components/chats/ChatsList.vue'
import ModalReview from '@/components/modals/ModalReview.vue'
import NavMenu from '@/components/nav/NavMenu.vue'
import { t } from '@/i18n'

export default {
    components: {
        DefaultHeader,
        NavTabs,
        ChatsList,
        ModalReview,
        NavMenu
    },
    setup() {
        const tabsStore = useChatsTabsStore()
        const chatsStore = useChatsStore()
        const tabs: NavTabsItemInterface[] = tabsStore.items
        const activeTab = tabsStore.activeTab
        let chats: Ref<ChatItemInterface[]> = ref(
            activeTab === 0 ? chatsStore.items : chatsStore.filterChats(activeTab)
        )

        function filterChats(id: number) {
            tabsStore.setActiveTab(id)

            if (id === 0) {
                chats.value = chatsStore.items
                return
            }

            chats.value = chatsStore.filterChats(id)
        }

        return { t, tabs, chats, activeTab, filterChats }
    }
}
</script>

<template>
    <div class="vh-100 main-content chats-screen">
        <DefaultHeader :title="t('chatsScreen.title')" />
        <NavTabs :items="tabs" :active="activeTab" @handle-tab="filterChats" />
        <ChatsList :items="chats" />
        <ModalReview />
        <NavMenu />
    </div>
</template>
