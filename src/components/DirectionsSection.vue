<script setup>
import { directions } from "@/assets/mock/index.js";
import LinkCard from "@/components/LinkCard.vue";
</script>

<template>
  <section class="app__section">
    <div class="wrapper">
      <h2 class="app__section-title">Направления подготовки</h2>

      <div class="app__cards app__section-body">
        <link-card
          v-for="direction in directions"
          :key="direction.name"
          :title="direction.title"
          :text="direction.text"
        />
      </div>
    </div>
  </section>
</template>
