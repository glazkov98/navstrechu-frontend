<script lang="ts">
import BackHeader from '@/components/header/BackHeader.vue'
import TestProgress from '@/components/test/TestProgress.vue'
import TestItem from '@/components/test/TestItem.vue'
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'
import { t } from '@/i18n'
import { useTestStore } from '@/stores/test'
import { ref } from 'vue'
import type { VariantActiveInterface } from '@/interfaces/variant-active-item.interface'
import router from '@/router'

export default {
    components: {
        BackHeader,
        TestProgress,
        TestItem,
        ButtonBlue
    },
    setup() {
        const testStore = useTestStore()
        const count = testStore.getCount()
        const currentId = ref(1)
        const currentItem = ref(testStore.getForId(currentId.value))
        const isDisabled = ref(!testStore.checkActiveVariant(currentId.value))

        function prevItem() {
            if (currentId.value === 1) {
                return false
            }

            currentId.value--
            currentItem.value = testStore.getForId(currentId.value)
            isDisabled.value = !testStore.checkActiveVariant(currentId.value)
        }

        function nextItem() {
            if (currentId.value === count) {
                const activeVariants: VariantActiveInterface[] = []
                testStore.items.forEach((item) => {
                    if (item.activeVariant === null) return false

                    activeVariants.push({
                        id: item.id,
                        variantId: item.activeVariant
                    })
                })
                localStorage.setItem('testResult', JSON.stringify(activeVariants))
                router.push({ name: 'networking' })
                return false
            }

            currentId.value++
            currentItem.value = testStore.getForId(currentId.value)
            isDisabled.value = !testStore.checkActiveVariant(currentId.value)
        }

        function isBackName() {
            if (currentId.value === 1) return 'networking'
            return null
        }

        function setActiveVariant(value: string) {
            testStore.setActiveVariant(currentId.value, parseInt(value))
            isDisabled.value = false
        }

        return {
            t,
            count,
            currentId,
            currentItem,
            isDisabled,
            prevItem,
            nextItem,
            setActiveVariant,
            isBackName
        }
    }
}
</script>

<template>
    <div class="vh-100 test-screen">
        <BackHeader :backName="isBackName()" @handle="prevItem()" class="icon-black" />
        <div class="side-padding">
            <TestProgress :count="count" :active="currentId" />
            <TestItem :item="currentItem" @change-variant="setActiveVariant" />
            <ButtonBlue
                class="container test-screen__btn test-screen__btn--bottom"
                @click="nextItem"
                :disabled="isDisabled"
                >{{
                    currentId === count ? t('testScreen.buttonSave') : t('testScreen.buttonNext')
                }}</ButtonBlue
            >
        </div>
    </div>
</template>

<style>
.test-screen {
    background-color: #fff;
}

.test-screen__btn.test-screen__btn--bottom {
    width: calc(100% - 32px);
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
}

.platform-ios .test-screen__btn.test-screen__btn--bottom {
    bottom: 46px;
}

@media screen and (max-width: 576px) {
    .test-screen__btn.test-screen__btn--bottom {
        left: 16px;
        transform: translateX(0);
    }
}
</style>
