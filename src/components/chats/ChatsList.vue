<script setup lang="ts">
import ChatsListItem from './ChatsListItem.vue'
import type { ChatItemInterface } from '@/interfaces/chat-item.interface'
import NotFoundTitle from '@/components/common/NotFoundTitle.vue'
import { t } from '@/i18n'

defineProps<{
    items: ChatItemInterface[]
}>()
</script>

<template>
    <div class="chats-list">
        <ChatsListItem v-for="item in items" :item="item" />
        <NotFoundTitle v-if="!items.length" :title="t('chatsScreen.notFoundTitle')" />
    </div>
</template>

<style scoped>
.chats-list {
    margin-top: 8px;
}
</style>
@/stores/menu
