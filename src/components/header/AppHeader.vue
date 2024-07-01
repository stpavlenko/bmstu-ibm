<script setup>
import HeaderDropdown from "@/components/header/HeaderDropdown.vue";

const dropdowns = [
  {
    title: "О факультете",
    items: [
      { title: "О нас", route: "/about", isInternal: true },
      { title: "Руководство", route: "/#managers" },
      { title: "Кафедры", route: "/#departments" },
      { title: "Направления подготовки", route: "/#directions" },
    ],
  },
  {
    title: "Поступающим",
    items: [
      { title: "Приемная комиссия", route: "/commission", isInternal: true },
      { title: "Бакалавриат", route: "/#directions" },
      { title: "Магистратура", route: "/#directions" },
      { title: "Аспирантура", route: "/#directions" },
      { title: "Дополнительное образование", route: "/#directions" },
      { title: "Для школьников", route: "/#", isInternal: true },
    ],
  },
  {
    title: "Обучающимся",
    items: [
      { title: "Личный кабинет", route: "/#", isInternal: true },
      { title: "Студcовет", route: "/#", isInternal: true },
      { title: "Профком", route: "/#", isInternal: true },
      { title: "Научное общество", route: "/scientific-society", isInternal: true },
    ],
  },
  {
    title: "Наука",
    items: [
      { title: "Конференции", route: "/conferences", isInternal: true },
      { title: "Научная деятельность", route: "/scientific-activity", isInternal: true },
      { title: "Публикации", route: "/#publications" },
    ],
  },
];
</script>

<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <a href="/">
        <img src="@/assets/img/logo.svg" alt="Логотип университета" class="app__logo" />
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
@use "@/assets/scss/variables" as *;

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
