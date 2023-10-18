import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import TestView from '../views/TestView.vue'
import EventsView from '../views/EventsView.vue'
import NetworkingView from '../views/NetworkingView.vue'
import ChatsView from '../views/ChatsView.vue'
import ProfileView from '../views/ProfileView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import PremiumView from '../views/PremiumView.vue'
import { useUserStore } from '@/stores/user'
import { useUsersStore } from '@/stores/users'
import { t } from '@/i18n'
import type { VariantActiveInterface } from '@/interfaces/variant-active-item.interface'
import { useTestStore } from '@/stores/test'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            meta: {
                title: t('loginScreen.title')
            },
            component: LoginView
        },
        {
            path: '/test',
            name: 'test',
            meta: {
                title: t('testScreen.title')
            },
            component: TestView
        },
        {
            path: '/events',
            name: 'events',
            meta: {
                title: t('eventsScreen.title')
            },
            component: EventsView
        },
        {
            path: '/networking',
            name: 'networking',
            meta: {
                title: t('networkingScreen.title')
            },
            component: NetworkingView
        },
        {
            path: '/chats',
            name: 'chats',
            meta: {
                title: t('chatsScreen.title')
            },
            component: ChatsView
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {
                title: t('profileScreen.title')
            },
            component: ProfileView
        },
        {
            path: '/favorites',
            name: 'favorites',
            meta: {
                title: t('favoritesScreen.title')
            },
            component: FavoritesView
        },
        {
            path: '/premium',
            name: 'premium',
            meta: {
                title: t('premiumScreen.title'),
                transition: 'none'
            },
            component: PremiumView
        },
        {
            path: '/achievements',
            name: 'achievements',
            redirect: (to) => {
                return 'profile'
            }
        },
        {
            path: '/me',
            name: 'me',
            redirect: (to) => {
                return 'profile'
            }
        },
        {
            path: '/history',
            name: 'history',
            redirect: (to) => {
                return 'profile'
            }
        },
        {
            path: '/about',
            name: 'about',
            redirect: (to) => {
                return 'profile'
            }
        },
        {
            path: '/logout',
            name: 'logout',
            redirect: (to) => {
                const userStore = useUserStore()
                userStore.clear()
                localStorage.removeItem('userId')
                localStorage.removeItem('hideModal')
                localStorage.removeItem('testResult')
                return '/'
            }
        }
    ]
})

const fromToAnimationEffect = [
    {
        from: 'profile',
        to: 'premium',
        effect: 'slide-left'
    },
    {
        from: 'premium',
        to: 'profile',
        effect: 'slide-right'
    },
    {
        from: 'networking',
        to: 'test',
        effect: 'slide-left'
    },
    {
        from: 'test',
        to: 'networking',
        effect: 'slide-right'
    }
]

router.beforeEach(async (to, from) => {
    if (to.meta.title) document.title = `${to.meta.title}`

    const userStore = useUserStore()
    const usersStore = useUsersStore()
    const testStore = useTestStore()

    const userId = localStorage.getItem('userId')
    if (userId) {
        const user = usersStore.getUserForId(parseInt(userId))
        if (user) userStore.setUser(user)
    }

    const activeVariants = JSON.parse(localStorage.getItem('testResult') || '[]')
    activeVariants.forEach((item: VariantActiveInterface) => {
        testStore.setActiveVariant(item.id, item.variantId)
    })

    if (!userStore.isLogin() && to.name !== 'login') return { name: 'login' }

    if (userStore.isLogin() && to.name == 'login') return { name: 'events' }
})

router.afterEach((to, from) => {
    let transition = 'none'

    fromToAnimationEffect.forEach((item) => {
        if (item.from !== from.name || item.to !== to.name) return false
        transition = item.effect
    })

    to.meta.transition = transition
})

export default router
