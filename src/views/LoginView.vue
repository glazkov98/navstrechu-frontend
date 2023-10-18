<script lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue'
import { t } from '@/i18n'

export default {
    components: {
        LoginForm
    },
    setup() {
        return { t }
    }
}
</script>

<template>
    <div class="login-screen">
        <div class="login-images">
            <img src="/src/assets/img/logo.svg" class="login-images__logo" :alt="t('title')" />
            <img
                src="/src/assets/img/peoples.png"
                class="login-images__img"
                :alt="t('loginScreen.peoples')"
            />
        </div>
        <LoginForm />
    </div>
</template>

<style>
.login-images {
    margin-top: 52px;
}

.login-images__logo {
    margin-left: auto;
    margin-right: auto;
}

.login-images__img {
    margin-top: 16px;
    width: 100%;
    height: auto;
}
</style>
