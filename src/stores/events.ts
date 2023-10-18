import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { EventItemInterface } from '@/interfaces/event-item.interface'

export const useEventsStore = defineStore('events', () => {
    const items: Ref<EventItemInterface[]> = ref([
        {
            id: 1,
            title: 'Как украсть коня не вставая с дивана',
            slug: 'kak-ukrast-konya-ne-vstavaya-s-divana',
            photoUrl: '/static/event1.png',
            type: 'Лекция',
            maxCountParticipants: 30,
            countParticipants: 28,
            price: 0,
            startDate: '29/09/2023 12:30'
        },
        {
            id: 2,
            title: 'Пошли на шашлыки',
            slug: 'poshli-na-shashliki',
            photoUrl: '/static/event2.png',
            type: 'Мероприятие',
            maxCountParticipants: 15,
            countParticipants: 3,
            price: 500,
            startDate: '28/09/2023 20:00'
        }
    ])

    function countEvents() {
        return items.value.length
    }

    function filterEvents() {
        return []
    }

    return { items, countEvents, filterEvents }
})
