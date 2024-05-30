<script setup>
import AppArrow from "@/components/UI/AppArrow.vue";

defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <div class="card link-card">
    <div>
      <span v-text="title" class="link-card__title"></span>

      <p v-text="text" class="link-card__text"></p>
    </div>

    <a href="/#" class="link-card__link app__arrow-container">
      Читать больше

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

  &__title {
    font-size: 1.5rem;
    color: $color-secondary;
    display: block;
    min-height: 7rem;
  }

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
