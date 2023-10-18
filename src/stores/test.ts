import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { TestItemInterface } from '@/interfaces/test-item.interface'

export const useTestStore = defineStore('test', () => {
    const items: Ref<TestItemInterface[]> = ref([
        {
            id: 1,
            title: 'Что вы хотите?',
            activeVariant: null,
            variants: [
                {
                    id: 1,
                    title: 'Найти полезные знакомства'
                },
                {
                    id: 2,
                    title: 'Найти друзей'
                },
                {
                    id: 3,
                    title: 'Просто хорошо провести время'
                }
            ]
        },
        {
            id: 2,
            title: 'Что вы хотите?',
            activeVariant: null,
            variants: [
                {
                    id: 1,
                    title: 'Найти полезные знакомства'
                },
                {
                    id: 2,
                    title: 'Найти друзей'
                },
                {
                    id: 3,
                    title: 'Просто хорошо провести время'
                }
            ]
        },
        {
            id: 3,
            title: 'Что вы хотите?',
            activeVariant: null,
            variants: [
                {
                    id: 1,
                    title: 'Найти полезные знакомства'
                },
                {
                    id: 2,
                    title: 'Найти друзей'
                },
                {
                    id: 3,
                    title: 'Просто хорошо провести время'
                }
            ]
        },
        {
            id: 4,
            title: 'Что вы хотите?',
            activeVariant: null,
            variants: [
                {
                    id: 1,
                    title: 'Найти полезные знакомства'
                },
                {
                    id: 2,
                    title: 'Найти друзей'
                },
                {
                    id: 3,
                    title: 'Просто хорошо провести время'
                }
            ]
        },
        {
            id: 5,
            title: 'Что вы хотите?',
            activeVariant: null,
            variants: [
                {
                    id: 1,
                    title: 'Найти полезные знакомства'
                },
                {
                    id: 2,
                    title: 'Найти друзей'
                },
                {
                    id: 3,
                    title: 'Просто хорошо провести время'
                }
            ]
        },
        {
            id: 6,
            title: 'Что вы хотите?',
            activeVariant: null,
            variants: [
                {
                    id: 1,
                    title: 'Найти полезные знакомства'
                },
                {
                    id: 2,
                    title: 'Найти друзей'
                },
                {
                    id: 3,
                    title: 'Просто хорошо провести время'
                }
            ]
        },
        {
            id: 7,
            title: 'Что вы хотите?',
            activeVariant: null,
            variants: [
                {
                    id: 1,
                    title: 'Найти полезные знакомства'
                },
                {
                    id: 2,
                    title: 'Найти друзей'
                },
                {
                    id: 3,
                    title: 'Просто хорошо провести время'
                }
            ]
        }
    ])

    function getForId(id: number) {
        return items.value.filter((item) => item.id === id)[0]
    }

    function getCount() {
        return items.value.length
    }

    function setActiveVariant(id: number, variantId: number) {
        items.value.forEach((item) => {
            if (item.id !== id) return false

            item.activeVariant = variantId
        })
    }

    function checkActiveVariant(id: number) {
        const item = items.value.filter((item) => item.id === id)[0]

        return item.activeVariant !== null ? true : false
    }

    return { items, getForId, getCount, setActiveVariant, checkActiveVariant }
})
