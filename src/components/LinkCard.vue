<script setup>
import AppArrow from "@/components/UI/AppArrow.vue";

defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <div class="home-card link-card">
    <div>
      <span v-text="title" class="home-card__title"></span>

      <p v-text="text" class="link-card__text"></p>
    </div>

    <a href="/#" class="link-card__link app__arrow-container">
      Сайт кафедры

      <app-arrow />
    </a>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/card";

.link-card {
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__text {
    color: $color-tertiary;
  }

  &__link {
    color: $color-4;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
  }
}
</style>
