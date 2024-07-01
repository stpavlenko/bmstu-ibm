<script setup>

import AppCard from "@/components/UI/AppCard.vue";
</script>

<template>
  <section class="app__section fs-15">
    <div class="wrapper">
      <h2 class="app__section-title text-blue">Научная деятельность</h2>

      <app-card class="mt-2 ">
        <a href="https://vk.com/away.php?to=http%3A%2F%2Fibm.bmstu.ru%2Fnil%2Flab.html&cc_key=" class="text-uppercase">
          Научно-исследовательская лаборатория “Экономико-математические методы в контроллинге”
        </a>

        <br>
        <br>

        <a href="https://vk.com/away.php?utf=1&to=https%3A%2F%2Forlovs.pp.ru%2F" class="text-uppercase">+ ссылка на
          учебники
          (https://orlovs.pp.ru/)</a>
      </app-card>

      <app-card class="mt-2 ">
        <router-link to="/project-management" class="text-uppercase">Научно-Образовательный центр “Проектный менеджмент
          и развитие кадрового
          потенциала”
        </router-link>
      </app-card>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
