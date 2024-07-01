<script setup>
import { ref } from "vue";
import { levels } from "@/assets/mock/index.js";
import DirectionsDialog from "@/components/directions/DirectionsDialog.vue";

const dialogVisibilityMap = ref({});
</script>

<template>
  <section class="app__section" id="directions">
    <div class="wrapper">
      <h2 class="app__section-title">Направления подготовки</h2>

      <div class="app__cards app__section-body">
        <div class="home-card direction-card" v-for="level in levels">
          <span class="home-card__title">{{ level.title }}</span>

          <template v-for="direction in level.directions" :key="direction.title">
            <button @click="dialogVisibilityMap[direction.title] = true" class="direction-card__btn">{{ direction.title
              }}
            </button>

            <DirectionsDialog v-model:visible="dialogVisibilityMap[direction.title]" :direction="direction" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/card";

.direction-card {
  color: $color-tertiary;
  padding: 0.625rem;

  &__btn {
    margin-top: .5rem;
    text-decoration: underline;
    text-align: left;
  }
}
</style>
