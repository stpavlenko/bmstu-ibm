<script setup>
defineProps({
  title: String,
  items: Array,
});
</script>

<template>
  <div class="dropdown">
    <button v-text="title" class="dropdown__btn"></button>

    <ul class="dropdown__list">
      <li v-for="item in items" :key="item">
        <a href="/#" v-text="item"></a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.dropdown {
  color: $color-white;
  position: relative;

  ul {
    list-style-type: none;
  }

  &:hover,
  &:focus-within {
    .dropdown__list {
      visibility: visible;
    }
  }

  &__btn {
    font-size: 1.5rem;
    background: transparent;
    border: none;
    color: inherit;
  }

  &__list {
    position: absolute;
    display: flex;
    visibility: hidden;
    background: $bg-secondary;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
