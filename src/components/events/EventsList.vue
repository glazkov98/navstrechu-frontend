<script setup lang="ts">
import EventsListItem from './EventsListItem.vue'
import type { EventItemInterface } from '@/interfaces/event-item.interface'
import NotFoundTitle from '@/components/common/NotFoundTitle.vue'
import { t } from '@/i18n'

defineProps<{
    items: EventItemInterface[]
}>()
</script>

<template>
    <div class="side-padding events-list">
        <EventsListItem v-for="item in items" :item="item" />
        <NotFoundTitle v-if="!items.length" :title="t('eventsScreen.notFoundTitle')" />
    </div>
</template>

<style scoped>
.events-list {
    margin-top: 24px;
}
</style>
@/stores/menu
