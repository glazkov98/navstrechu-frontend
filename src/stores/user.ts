import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserInterface } from '@/interfaces/user.interface'

export const useUserStore = defineStore('user', () => {
    let user: Ref<UserInterface | null> = ref(null)
    function setUser(data: UserInterface) {
        user.value = data
    }
    function clear() {
        user.value = null
    }
    function isLogin() {
        if (user.value !== null) return true
        return false
    }

    return { user, setUser, clear, isLogin }
})
