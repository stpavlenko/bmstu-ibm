<script setup>

import AppCard from "@/components/UI/AppCard.vue";
import App from "@/App.vue";
</script>

<template>
  <section class="app__section">
    <div class="wrapper container">
      <h2 class="app__section-title text-blue">
        Студенческая научная весна 2024
      </h2>

      <p class="app__section-p">
        Поздравляем победителей Всероссийской студенческой конференции <br>
        «Студенческая научная весна — 2024»! <br>
        <span class="text-blue">Секция № 1</span> <br>
        1 место <br>
        Бирюкова Анна Дмитриевна (группа ИБМ3-82) <br>
        2 место <br>
        Костырин Дмитрий Евгеньевич (10 класс) <br>
        3 место <br>
        Кланица Софья Борисовна (ИБМ3-83Б) <br>
        <span class="text-blue">Секция № 2</span> <br>
        1 место <br>
        Сусанин Станислав Ильич (группа ИБМ7-82Б) <br>
        2 место <br>
        Камалов Марат Равилевич (группа ИУ5-41М) <br>
        Быков Сергей Алексеевич (группа ИБМ6-44Б) <br>
        Ворчук Олег Сергеевич (группа СГН3-23Б) <br>
        3 место <br>
        Патрова Арина Александровна (группа ИБМ6-23Б) <br>
        <span class="text-blue">Секция № 3</span> <br>
        1 место <br>
        Чистяков Артем Витальевич (группа ИБМ6-24Б) <br>
        Долгова Анастасия Дмитриевна (группа ИБМ4-62Б) <br>
        2 место <br>
        Воронина Мария Евгеньевна (группа ИБМ6-81Б) <br>
        3 место <br>
        Иванова-Годунова Виктория Александровна (группа ИБМ2-42Б) <br>
      </p>

      <app-card>
        <a href="https://studolymp.bmstu.ru/sites/default/files/2023-01/СБОРНИК%20ИТОГ.pdf" class="text-blue fs-15">
          Сборник материалов конференции «Студенческая научная весна 2024»
        </a>
      </app-card>

      <h3 class="app__section-small-title text-blue">Секция №1</h3>

      <img src="@/assets/img/student-spring-2024/1.png" alt="Секция №1">

      <h3 class="app__section-small-title text-blue">Секция №2</h3>

      <img src="@/assets/img/student-spring-2024/2.png" alt="Секция №2">

      <h3 class="app__section-small-title text-blue">Секция №3</h3>

      <img src="@/assets/img/student-spring-2024/3.png" alt="Секция №3">

      <app-card class="contacts">
        <span class="app__section-small-title">Контакты</span>

        <p class="fs-15">
          E-mail: <a href="mailto:stud.nauka.ibm@bmstu.ru">stud.nauka.ibm@bmstu.ru</a>, <br>
          <a href="mailto:snieo.bmstu@gmail.com">snieo.bmstu@gmail.com</a> <br>
          Группа ВК: <a href="https://vk.com/snieo_bmstu">СНИЭО им. Ю.А. Абрамова</a> <br>
          Ауд. 517 ИБМ Волкова Мария Валентиновна
        </p>
      </app-card>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contacts {
  text-align: center;
}
</style>
