<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div>
    <h2 class="app__section-title">Мероприятия</h2>

    <div class="item">
      <div class="item__body">
        <h3 v-text="item.title" class="item__title"></h3>

        <p v-text="item.text" class="item__text"></p>
      </div>

      <div class="item__img-container">
        <img :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

h2 {
  margin-top: 2rem;
  color: $color-white;
}

.item {
  @include swiper-item;
  flex-direction: row-reverse;

  &__title {
    font-size: 2.25rem;
  }
}
</style>
