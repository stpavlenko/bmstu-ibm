<script setup>
import HeaderDropdown from "@/components/header/HeaderDropdown.vue";

const dropdowns = [
  {
    title: "О факультете",
    items: [
      { title: "О нас", route: "/about", isInternal: true },
      { title: "Руководство", route: "/#managers", isInternal: true },
      { title: "Кафедры", route: "/#departments", isInternal: true },
      { title: "Направления подготовки", route: "/#directions", isInternal: true },
    ],
  },
  {
    title: "Поступающим",
    items: [
      { title: "Приемная комиссия", route: "/commission", isInternal: true },
      { title: "Бакалавриат", route: "/#directions", isInternal: true },
      { title: "Магистратура", route: "/#directions", isInternal: true },
      { title: "Аспирантура", route: "/#directions", isInternal: true },
      { title: "Дополнительное образование", route: "/#directions", isInternal: true },
      { title: "Для школьников", route: "https://olymp.bmstu.ru/ru" },
    ],
  },
  {
    title: "Обучающимся",
    items: [
      { title: "Личный кабинет", route: "https://lks.bmstu.ru/" },
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
      { title: "Публикации", route: "/#publications", isInternal: true },
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
