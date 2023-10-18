<script setup lang="ts">
const props = defineProps<{
    name: string
    label: string
    value?: string | number
    checked?: boolean
}>()

function isChecked() {
    if (props.checked) return true

    return false
}
</script>

<template>
    <label class="flex flex-row-nowrap flex-align-center input-radio">
        <input
            type="radio"
            :name="name"
            :value="value || ''"
            class="input-radio__input"
            :checked="isChecked()"
        />
        <span class="input-radio__text">{{ label }}</span>
    </label>
</template>

<style scoped>
.input-radio__input {
    display: none;
}
.input-radio__text {
    font-size: 16px;
    line-height: 24px;
    color: #1c212d;
    padding-left: 36px;
    position: relative;
}

.input-radio__text::before {
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 1px #313745;
    position: absolute;
    top: 0;
    left: 0;
}

.input-radio__input:checked + .input-radio__text::before {
    background-color: #0c50ff;
    box-shadow: 0 0 0 1px #0c50ff;
}
</style>
