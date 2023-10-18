import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ChatItemInterface } from '@/interfaces/chat-item.interface'

export const useChatsStore = defineStore('chats', () => {
    const items: Ref<ChatItemInterface[]> = ref([
        {
            id: 1,
            categoryId: 3,
            name: 'Евгений',
            sender: null,
            photoUrl: '/static/chat1.png',
            lastMessage: 'Очень классная встреча получилась, надо будет запланировать',
            isOnline: true,
            dateTime: '09/14/2023 10:20'
        },
        {
            id: 2,
            categoryId: 2,
            name: 'Павел',
            sender: null,
            photoUrl: '/static/chat2.png',
            lastMessage: 'Супер! Тогда завтра в 18:00 в кафе Сант',
            isOnline: false,
            dateTime: '09/13/2023 15:26'
        },
        {
            id: 3,
            categoryId: 1,
            name: 'Встреча друзей',
            sender: 'Антон',
            photoUrl: '/static/chat3.png',
            lastMessage: 'Кто возьмет мангал?',
            dateTime: '09/06/2023 20:56'
        },
        {
            id: 4,
            categoryId: 2,
            name: 'Антон',
            sender: null,
            photoUrl: '/static/chat4.png',
            lastMessage: 'Давай на полчаса перенесем встречу, я не успеваю',
            isOnline: false,
            dateTime: '09/06/2023 13:01'
        },
        {
            id: 5,
            categoryId: 1,
            name: 'Дизайнерский ИТ-субботник',
            sender: 'Вы идете на мероприятие',
            photoUrl: '/static/chat5.png',
            lastMessage: null,
            dateTime: '08/28/2023 11:54'
        }
    ])

    function filterChats(id: number) {
        return items.value.filter((item) => item.categoryId === id)
    }

    return { items, filterChats }
})
