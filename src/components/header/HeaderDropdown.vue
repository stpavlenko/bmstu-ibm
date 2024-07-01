<script setup>
import { useRouter } from "vue-router";
import { nextTick } from "vue";

defineProps({
  title: String,
  items: Array,
});

const router = useRouter();

const handleClick = async (item) => {
  if (item.isAnchor) {
    await router.push(item.route);
    await nextTick();
    const el = document.querySelector(item.route.slice(1));
    el.scrollIntoView({ behavior: "smooth" });
  } else if (item.isInternal) await router.push(item.route);
};
</script>

<template>
  <div class="dropdown">
    <button v-text="title" class="dropdown__btn"></button>

    <ul class="dropdown__list">
      <li v-for="item in items" :key="item" class="item">
        <button v-if="item.isInternal || item.isAnchor" :to="item.route" @click="handleClick(item)">{{ item.title }}
        </button>
        <a v-else :href="item.route">{{ item.title }}</a>
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

    button {
      text-align: left;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
