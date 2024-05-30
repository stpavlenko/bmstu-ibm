<script setup></script>

<template>
  <footer class="footer">
    <div class="wrapper footer__wrapper">
      <div class="footer__logo">
        <a href="/">
          <img src="@/assets/img/logo.svg" alt="Логотип университета" class="app__logo" />
        </a>

        <span class="footer__caption">© МГТУ им. Баумана, 2024</span>
      </div>

      <div class="footer__info">
        <div>
          <p class="footer__title">Контакты</p>

          <p>
            e-mail:

            <a href="mailto:ibm1.bmstu@mail.ru"> ibm1.bmstu@mail.ru</a>
          </p>

          <p>
            <a href="https://bmstu.ru/">https://bmstu.ru/</a>
          </p>
        </div>

        <div>
          <p class="footer__title">Главный учебный корпус</p>

          <p>105005, Москва, 2-я Бауманская ул., д. 5, стр. 1</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.footer {
  margin-top: 6.25rem;
  font-size: 0.75rem;
  color: $color-white;
  padding-block: 1rem;
  background-color: $bg-secondary;

  a {
    color: inherit;
  }

  &__info {
    display: flex;
    gap: 2.5rem;

    > div {
      max-width: 11.25rem;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 0.875rem;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
