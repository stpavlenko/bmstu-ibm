<script setup>
defineProps({ manager: Object });
</script>

<template>
  <div class="card manager-card">
    <img :src="manager.img" :alt="manager.name" class="manager-card__img">

    <div class="manager-card__text">
      <p v-text="manager.name" class="manager-card__name"></p>

      <p v-text="manager.position" class="manager-card__position"></p>

      <p class="manager-card__contacts">
        <p>Телефон: <a v-text="manager.phone" :href="`tel:${manager.phone}`"></a></p>

        <p>E-mail: <a v-text="manager.email" :href="`mailto:${manager.email}`"></a></p>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/card";

.manager-card {
  color: $color-secondary;
  min-height: 30rem;
  display: flex;
  flex-direction: column;

  &__img {
    width: 18.75rem;
    height: 18.75rem;
  }

  &__text {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: .875rem;
  }

  &__name {
    text-transform: uppercase;
    min-height: 2em;
  }

  &__name, &__position {
    text-align: center;
  }

  &__contacts {
    margin-top: auto;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
