<script setup>
import ManagerCard from "@/components/managers/ManagerCard.vue";
import { managers } from "@/assets/mock/index.js";
</script>

<template>
  <section class="app__section">
    <div class="wrapper">
      <h2 class="app__section-title">Руководство</h2>

      <div class="app__cards app__section-body">
        <manager-card v-for="manager in managers" :key="manager.name" :manager />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
