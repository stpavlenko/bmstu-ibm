<script setup>
import PublicationsItem from "@/components/publications/PublicationsItem.vue";
import { publications } from "@/assets/mock/index.js";
</script>

<template>
  <section class="app__section">
    <div class="wrapper">
      <h2 class="app__section-title">Публикации</h2>

      <publications-item
        v-for="publication in publications"
        :key="publication.id"
        :publication
        class="app__section-body"
      />
    </div>
  </section>
</template>
