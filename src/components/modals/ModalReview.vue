<script setup lang="ts">
import ModalCommon from '@/components/modals/ModalCommon.vue'
import ButtonGray from '@/components/buttons/ButtonGray.vue'
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'
import { t } from '@/i18n'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isShow = ref(false)

if (!localStorage.getItem('hideModal') && route.name != 'login') {
    setTimeout(() => {
        isShow.value = true
    }, 5000)
}

function hideModal() {
    isShow.value = false
    localStorage.setItem('hideModal', 'true')
}
</script>

<template>
    <ModalCommon class="modal-review" :show="isShow" @hide-modal="hideModal()">
        <img
            src="@/assets/img/people-rating.png"
            class="modal-review__img"
            :alt="t('modalReview.imgAlt')"
        />
        <h2 class="modal-review__title">{{ t('modalReview.title') }}</h2>
        <p class="modal-review__text">{{ t('modalReview.text') }}</p>
        <div class="flex flex-row-nowrap modal-review__row modal-review-row">
            <ButtonGray class="modal-review-row__btn" @click="hideModal()">{{
                t('modalReview.btnLater')
            }}</ButtonGray>
            <ButtonBlue class="modal-review-row__btn" @click="hideModal()">{{
                t('modalReview.btnReview')
            }}</ButtonBlue>
        </div>
    </ModalCommon>
</template>

<style scoped>
.modal-review__img {
    width: 100%;
    max-width: 275px;
    height: auto;
    margin: 0 auto 20px;
}

.modal-review__title,
.modal-review__text {
    max-width: 310px;
}

.modal-review__title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 12px;
}

.modal-review__text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 20px;
}

.modal-review-row__btn {
    padding-left: 16px;
    padding-right: 16px;
}

.modal-review-row__btn:first-child {
    margin-right: 8px;
}
</style>
