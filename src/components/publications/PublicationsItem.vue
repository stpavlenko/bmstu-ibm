<script setup>
import AppArrow from "@/components/UI/AppArrow.vue";

defineProps({
  publication: Object,
});
</script>

<template>
  <div class="publication">
    <div>
      <p class="publication__class">Статья Scopus</p>

      <a href="/#" v-text="publication.authors" class="publication__authors"></a>
    </div>

    <div class="publication__right">
      <div class="publication__body">
        <p v-text="publication.title"></p>

        <br>

        <p v-text="publication.text"></p>
      </div>

      <div class="app__arrow-container">
        <app-arrow />
      </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.publication {
  display: flex;
  justify-content: space-between;
  min-height: 27rem;
  padding-block: 2.75rem;
  border-top: 2px solid $border-color-publication;

  &:last-child {
    border-bottom: 2px solid $border-color-publication;
  }

  &__class {
    color: $color-5;
  }

  &__authors {
    margin-top: 0.5rem;
    color: $color-primary;
  }

  &__class, &__authors {
    font-size: 1.25rem;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  &__body {
    font-size: 0.9375rem;
    max-width: 40rem;
  }
}
</style>
