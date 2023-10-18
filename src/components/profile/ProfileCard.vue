<script setup lang="ts">
import type { UserInterface } from '@/interfaces/user.interface'

defineProps<{
    user: UserInterface | null
}>()
</script>

<template>
    <div class="side-padding profile-card-wrapper">
        <div class="flex flex-row-nowrap flex-align-center profile-card">
            <figure class="profile-card__figure profile-card-figure">
                <img :src="user?.avatar" class="profile-card-figure__img" :alt="user?.name" />
            </figure>
            <div class="profile-card__content profile-card-content">
                <h3 class="profile-card-content__title">{{ user?.name }}</h3>
                <p class="profile-card-content__text">{{ user?.status }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-card-wrapper {
    margin-bottom: 16px;
}

.profile-card {
    background-color: #f4f4f6;
    padding: 8px;
    border-radius: 39px;
}

.profile-card__figure {
    background-color: #ccc;
    width: 72px;
    height: 72px;
    border-radius: 50%;
}

.profile-card-figure__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.profile-card__content {
    margin-left: 12px;
}

.profile-card-content__title,
.profile-card-content__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.profile-card-content__title {
    line-height: 23px;
    margin-bottom: 4px;
}

.profile-card-content__text {
    font-size: 14px;
    line-height: 16px;
    color: #3e4763;
}
</style>
