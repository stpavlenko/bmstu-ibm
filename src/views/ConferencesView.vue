<script setup>
import AppCard from "@/components/UI/AppCard.vue";

const links = [{
  title: "Академические чтения по космонавтике — Секция 8. Экономика космической деятельности",
  href: "https://korolev.bmstu.press/",
}, {
  title: "Всероссийская конференция «Студенческая научная весна», секция «Инженерный бизнес и менеджмент»",
  isInternal: true,
  href: "/student-spring",
}, {
  title: "Всероссийская научно-практическая конференция «Системы управления полным жизненным циклом высокотехнологичной продукции в машиностроении: новые источники роста»",
  href: "https://ibm4.bmstu.ru/full-life-cycle-management-systems-for-high-tech-products-in-mechanical-engineering/",
}, {
  title: "Всероссийская конференция молодых ученых и специалистов «Будущее машиностроения России». — Секция Е. Экономика и организация машиностроительного производства",
  href: "https://bmr.bmstu.press/",
}, {
  title: "Вызовы и возможности развития инновационного предпринимательства в новых реалиях международного сотрудничества",
  href: "/#",
}, {
  title: "Международная научно-практическая конференция «Кадровый потенциал инновационного развития»",
  href: "https://kir.bmstu.press/ http://czarnowski.bmstu.ru/registration/",
}, {
  title: "Научно-практическая конференция «Чарновские чтения по организации производства»",
  href: "http://czarnowski.bmstu.ru/registration/",
},
];
</script>

<template>
  <section class="app__section">
    <div class="wrapper conferences">
      <h2 class="app__section-title text-blue">Конференции</h2>

      <p class="app__section-p">Факультет ИБМ славится своими научными школами, в рамках которых на базе МГТУ им.
        Н.Э.
        Баумана и с участием профессорско-преподавательского коллектива университета традиционно организовываются
        конференции: </p>

      <app-card v-for="{isInternal, href, title} in links" :key="href">
        <a v-if="!isInternal" :href="href" class="text-blue text-uppercase fs-15">{{ title }}</a>

        <router-link v-else-if="isInternal" :to="href" class="text-blue text-uppercase fs-15">{{ title }}</router-link>
      </app-card>

      <p class="app__section-p">Ведущую роль и базой развития научного потенциала студентов факультета являются
        творческие работы, которые выполняются в рамках лабораторных, курсовых и квалификационных работ в процессе
        обучения,
        получения профессиональных навыков и знаний.
        <br>
        Бакалавры, магистры и аспиранты, оттачивая свои умения и апробируя полученные знания, демонстрируют результаты
        своих
        научных исследований, выступая на конференциях, которые организуются с участием преподавателей факультета
        ИБМ. </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.conferences {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
</style>
