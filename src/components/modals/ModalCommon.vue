<script setup lang="ts">
const props = defineProps<{
    show: boolean
}>()

const emit = defineEmits(['hideModal'])

if (props.show) {
    document.body.classList.add('overflow-hidden')
}

function hideModal() {
    emit('hideModal')
    document.body.classList.remove('overflow-hidden')
}
</script>

<template>
    <Transition>
        <div class="modal-container" @click.self="hideModal()" v-if="show">
            <div class="side-padding modal">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.modal-container {
    width: 100%;
    height: 100%;
    background-color: rgba(6, 22, 45, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

.modal-container.v-enter-active,
.modal-container.v-leave-active {
    transition: background-color 0.5s;
}

.modal-container.v-enter-from,
.modal-container.v-leave-to {
    background-color: transparent;
}

.modal {
    background-color: #fff;
    width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
    border-radius: 24px 24px 0 0;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(0);
    transition: transform 0.5s;
}

.platform-ios .modal {
    padding-bottom: 44px;
}

.modal-container.v-enter-from .modal,
.modal-container.v-leave-to .modal {
    transform: translateY(100%);
}
</style>
