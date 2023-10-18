<script setup lang="ts">
import ButtonGray from '@/components/buttons/ButtonGray.vue'
import IconVk from '@/components/icons/IconVk.vue'
import IconCircleLoader from '@/components/icons/IconCircleLoader.vue'
import { login } from '@/plugins/vkauth'
import { t } from '@/i18n'

const emit = defineEmits(['login'])

const vkAuthInit = window.isVKInit

function loginVk() {
    if (!vkAuthInit.value) return false

    login(
        (response: any) => {
            emit('login', response)
        },
        (response: any) => {
            console.log(response)
        }
    )
}
</script>

<template>
    <ButtonGray
        type="button"
        class="flex flex-row-nowrap flex-justify-center flex-align-center"
        @click="loginVk()"
    >
        <IconVk class="vk-icon" v-if="vkAuthInit" />
        <IconCircleLoader class="loader" v-else />
        <span v-if="vkAuthInit">{{ t('loginScreen.loginVkId') }}</span>
    </ButtonGray>
</template>

<style scoped>
.vk-icon {
    margin-right: 8px;
}
</style>
