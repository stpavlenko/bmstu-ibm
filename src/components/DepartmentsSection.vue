<script setup>
import { departments } from "@/assets/mock";
import LinkCard from "@/components/LinkCard.vue";
</script>

<template>
  <section class="departments app__section" id="departments">
    <div class="wrapper">
      <h2 class="app__section-title">Кафедры</h2>

      <div class="app__cards app__section-body">
        <link-card v-for="department in departments" :title="department.title" :text="department.text"
                   :link="department.link" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
