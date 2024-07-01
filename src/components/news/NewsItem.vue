<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div class="item">
    <div class="item__body">
      <h2 v-text="item.title" class="app__section-title"></h2>

      <p v-text="item.text" class="item__text"></p>
    </div>

    <div class="item__img-container">
      <img :src="item.img" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.item {
  @include swiper-item;
}
</style>
