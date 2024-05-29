<script setup>

</script>

<template>
  <section class="ibm">
    <div class="wrapper ibm__wrapper">
      <img src="@/assets/img/logo-ibm.png" alt="Лого “Инженерный бизнес и менеджмент”" class="ibm__logo">

      <h1 class="ibm__title">Факультет “Инженерный бизнес и менеджмент”</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.ibm {
  padding-block: 2rem;
  background-color: $bg-tertiary;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 10rem;
    height: 10rem;
  }

  &__title {
    font-size: 2.5rem;
  }
}
</style>
