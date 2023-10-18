import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { TariffItemInterface } from '@/interfaces/tariff-item.interface'

export const useTariffPlansStore = defineStore('tariff-plans', () => {
    const items: Ref<TariffItemInterface[]> = ref([
        {
            id: 1,
            title: 'Это база',
            list: [
                'Создание 3 встреч в неделю',
                'Авторские стикеры и смайлики в чате',
                'Возможность украсить свой профиль',
                'Безлимит на посещение встреч',
                'Посещение 3 онлайн встреч в неделю'
            ],
            price: 250
        },
        {
            id: 2,
            title: 'Профи общения',
            list: [
                'Безлимит на создание встреч',
                'Нет рекламы',
                'Безлимит на посещение встреч',
                'Создание оплачиваемых встреч до 20 человек',
                'Создание модерируемых мероприятий'
            ],
            price: 550
        },
        {
            id: 3,
            title: 'Для организаторов',
            list: [
                'Продажа билетов на мероприятия и встречи в неограниченном количестве',
                'Сниженная комиссия за продажу на платформе',
                'Статистика по мероприятиям'
            ],
            price: 1500
        }
    ])

    return { items }
})
