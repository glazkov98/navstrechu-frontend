import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserInterface } from '@/interfaces/user.interface'

export const useUsersStore = defineStore('users', () => {
    let items: Ref<UserInterface[]> = ref([
        {
            id: 1,
            name: 'Dmitry Glazkov',
            phone: '+7 (983) 111-96-79',
            vkId: 754937591,
            avatar: '/static/avatar1.png',
            status: 'Профи знакомств'
        },
        {
            id: 2,
            name: 'Евгений Боровицкий',
            phone: '+7 (950) 218-04-44',
            vkId: 364433107,
            avatar: '/static/avatar2.png',
            status: 'Профи знакомств'
        },
        {
            id: 3,
            name: 'Антон Петров',
            phone: '+7 (950) 211-34-05',
            vkId: 182526613,
            avatar: '/static/avatar3.png',
            status: 'Профи знакомств'
        },
        {
            id: 3,
            name: 'Павел Савин',
            phone: '+7 (913) 662-35-74',
            vkId: 612882358,
            avatar: '/static/avatar4.png',
            status: 'Профи знакомств'
        }
    ])
    function getUserForId(id: number) {
        return items.value.filter((item) => item.id === id)[0]
    }
    function getUserForPhone(phone: string) {
        return items.value.filter((item) => item.phone === phone)[0]
    }
    function getUserForVkId(id: number) {
        return items.value.filter((item) => item.vkId === id)[0]
    }

    return { items, getUserForPhone, getUserForVkId, getUserForId }
})
