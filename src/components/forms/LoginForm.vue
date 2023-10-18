<script setup lang="ts">
import FormGroup from '@/components/forms/FormGroup.vue'
import FormDelimiter from '@/components/forms/FormDelimiter.vue'
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'
import ButtonVkId from '@/components/buttons/ButtonVkId.vue'
import InputPhone from '@/components/inputs/InputPhone.vue'
import { t } from '@/i18n'
import { ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const loginForm = {
    phone: ''
}

const phoneErrorText = ref('')
const phoneIsError = ref(false)
const usersStore = useUsersStore()
const userStore = useUserStore()

function resetPhoneError() {
    phoneIsError.value = false
    phoneErrorText.value = ''
}

function checkValue(cond: boolean, message: string) {
    resetPhoneError()
    if (!cond) {
        phoneIsError.value = true
        phoneErrorText.value = message
        return false
    }

    return true
}

function submitForm() {
    if (!checkValue(loginForm.phone.trim() !== '', t('loginScreen.phoneEmpty'))) return false

    if (
        !checkValue(
            /\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/i.test(loginForm.phone),
            t('loginScreen.phoneIncorrect')
        )
    )
        return false

    const user = usersStore.getUserForPhone(loginForm.phone)

    if (!checkValue(user ? true : false, t('loginScreen.userNotFound'))) return false

    userStore.setUser(user)

    localStorage.setItem('userId', String(user.id))

    router.push({ name: 'events' })
}

function loginVk(response: any) {
    const user = usersStore.getUserForVkId(parseInt(response.session.user.id))

    if (!checkValue(user ? true : false, t('loginScreen.userNotFound'))) return false

    userStore.setUser(user)

    localStorage.setItem('userId', String(user.id))

    router.push({ name: 'events' })
}
</script>

<template>
    <form class="side-padding login-form" @submit.prevent="submitForm">
        <FormGroup>
            <InputPhone
                v-model="loginForm.phone"
                :is-error="phoneIsError"
                :error-text="phoneErrorText"
                @update:model-value="resetPhoneError()"
            />
        </FormGroup>
        <FormGroup>
            <ButtonBlue>{{ t('loginScreen.next') }}</ButtonBlue>
        </FormGroup>
        <FormGroup>
            <FormDelimiter :text="t('loginScreen.or')" />
        </FormGroup>
        <FormGroup>
            <ButtonVkId @login="loginVk" />
        </FormGroup>
    </form>
</template>

<style scoped>
.login-form {
    background-color: #fff;
    width: 100%;
    padding-top: 24px;
    padding-bottom: 40px;
    border-radius: 24px;
    box-shadow: 0px -4px 45px 0px rgba(141, 141, 141, 0.14);
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>
