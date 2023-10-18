<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    label: string
    type: string
    name: string
    placeholder: string
    value: string
    isError?: boolean
    errorText?: string
}>()

const emit = defineEmits(['update', 'focus'])

function handleInput(event: Event) {
    emit('update', (event.target as HTMLInputElement).value)
}

function handleFocus(event: Event) {
    emit('focus', event)
}
</script>

<template>
    <div class="input-wrapper">
        <label :for="name" class="input-label">{{ label }}</label>
        <input
            :type="type"
            :name="name"
            :id="name"
            :class="{ 'side-padding': true, input: true, 'is-error': isError }"
            :value="value"
            :placeholder="placeholder"
            @input="handleInput"
            @focus="handleFocus"
        />
        <p class="error-text" v-if="isError">{{ errorText }}</p>
    </div>
</template>

<style scoped>
.input-label,
.input {
    font-size: 14px;
    line-height: 20px;
}

.input-label {
    display: inline-block;
    font-weight: 600;
    color: #5c647d;
    margin-bottom: 4px;
}

.input {
    display: block;
    color: #17233d;
    background-color: #f6f7f9;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #cdd1db;
    border-radius: 8px;
}

.input.is-error {
    border-color: #e51a1a;
}

.input:focus {
    outline: none;
}

.input::placeholder {
    color: #afb5c0;
}

.error-text {
    font-size: 13px;
    color: #e51a1a;
    margin-top: 6px;
}
</style>
