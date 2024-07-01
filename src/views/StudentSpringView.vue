<script setup>
import AppCard from "@/components/UI/AppCard.vue";

const springs = [
  {
    title: "Студенческая научная весна 2024",
    href: "/student-spring-2024",
  }, {
    title: "Студенческая научная весна 2023",
    href: "/student-spring/#",
  }, {
    title: "Студенческая научная весна 2022",
    href: "/student-spring/#",
  }, {
    title: "Студенческая научная весна 2021",
    href: "/student-spring/#",
  }, {
    title: "Студенческая научная весна 2020",
    href: "/student-spring/#",
  }, {
    title: "Студенческая научная весна 2019",
    href: "/student-spring/#",
  }, {
    title: "Студенческая научная весна 2018",
    href: "/student-spring/#",
  }, {
    title: "Студенческая научная весна 2017",
    href: "/student-spring/#",
  }, {
    title: "Студенческая научная весна 2016",
    href: "/student-spring/#",
  },
];
</script>

<template>
  <section class="app__section">
    <div class="wrapper container">
      <h2 class="app__section-title text-blue">Студенческая научная весна на факультете ИБМ </h2>

      <p class="app__section-p">
        Ежегодно в рамках Всероссийского инновационного молодежного научно – инженерного форума
        «Политехника» на нашем факультете проходит секция «Инженерный бизнес и менеджмент» Всероссийской студенческой
        конференции «Студенческая научная весна».
      </p>

      <p class="app__section-p">
        Научный руководитель секции «Инженерный бизнес и менеджмент»:
        Омельченко И.Н., д.т.н., д.э.н., профессор, декан факультета «Инженерный бизнес и менеджмент»
      </p>

      <p class="app__section-p">
        Председатель: <br>
        Омельченко И.Н., д.т.н., д.э.н., профессор, декан факультета Инженерный бизнес и менеджмент»
      </p>

      <p class="app__section-p">
        Ученый секретарь: <br>
        Волкова М.В., к.э.н., доцент кафедры «Промышленная логистика»
      </p>

      <h3 class="app__section-small-title text-blue">Авторам</h3>

      <app-card v-for="spring in springs" class="spring">
        <router-link :to="spring.href" class="text-blue fs-15">
          {{ spring.title }}
        </router-link>
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

.spring {
  text-align: center;
}
</style>
