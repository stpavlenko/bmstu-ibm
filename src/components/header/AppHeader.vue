<script setup>
import HeaderDropdown from "@/components/header/HeaderDropdown.vue";

const dropdowns = [
  {
    title: "О факультете",
    items: ["О нас", "Руководство"],
  }, {
    title: "Поступающим",
    items: ["Проходные баллы", "Бакалавриат", "Магистратура", "Аспирантура", "Дополнительное образование", "Для школьников"],
  }, {
    title: "Обучающимся",
    items: ["Личный кабинет", "Студcовет", "Профком", "Научное общество"],
  }, {
    title: "Наука",
    items: ["Конкурсы", "Рейтинг", "Публикации", "Научные проекты"],
  },
];
</script>

<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <a href="/">
        <img src="@/assets/img/logo.svg" alt="Логотип университета" class="app__logo">
      </a>

      <nav class="header__nav">
        <ul>
          <li v-for="dropdown in dropdowns">
            <header-dropdown :title="dropdown.title" :items="dropdown.items" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.header {
  display: flex;
  align-items: center;
  background: $bg-secondary;
  padding-block: 1rem;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    ul {
      list-style-type: none;
      display: flex;
      gap: 2rem;
    }
  }
}
</style>
