<script setup>

import AppCard from "@/components/UI/AppCard.vue";

const tasks = [
  "Обеспечение взаимодействия с предприятиями и организациями реального сектора экономики, а также с органами государственного управления, экспертно-аналитическими и консалтинговыми организациями по реализации междисциплинарных научно-исследовательских работ в области цифровой экономики и поддержки принятия решений по проблемам управления проектами цифровой трансформации оборонно-промышленного комплекса и наукоемких гражданских отраслей.",
  "Развитие системы подготовки, переподготовки и повышения квалификации руководителей и специалистов промышленных предприятий и организаций различных форм собственности в области управления высокотехнологичными проектами и программами с целью освоения гибких методологий управления проектами, методов и инструментов поддержки принятия решений.",
  "Реализация научно-исследовательской, методической и образовательной деятельности в области развития технологий проектного менеджмента.",
  "Проведение инициативных, задельных и иных форм и видов научно-исследовательских работ в обеспечении создания технологий управления проектами и программами на основе передовых инструментов искусственного интеллекта, машинного обучения, анализа больших данных, с привлечением финансирования из различных источников, включая бюджетные и внебюджетные средства, гранты и прочие источники финансирования.",
  "Развитие академических связей с ведущими зарубежными и отечественными учеными и специалистами-практиками в области проектного менеджмента и кадрового развития, создание совместных исследовательских групп и творческих коллективов для решения актуальных научно-исследовательских и образовательных проблем, организация мастер-классов, исследований кейсов и лучших практик, подготовка и издание монографий, научных статей, учебников, учебных пособий и методических материалов по результатам проведенных совместных исследований и мероприятий.",
  "Организация международных и всероссийских научно-практических конференций, симпозиумов, семинаров, круглых столов и коллоквиумов по направлениям деятельности.",
  "Информирование студентов, аспирантов и профессорско-преподавательского состава об актуальных событиях и достижениях в области теории и практики проектного менеджмента и кадрового развития посредством социальных медиа.",
  "Подготовка к сертификации по стандартам управления проектами.",
  "Оказание консалтинговых услуг коммерческим и некоммерческим предприятиям и организациям, включая высшие учебные заведения, органы общественного и территориального управления, с целью повышения профессионального уровня и развития специализированных компетенций проектного менеджмента в различных прикладных областях с учетом региональной и отраслевой специфики.",
];
</script>

<template>
  <section class="app__section">
    <div class="wrapper container">
      <h2 class="app__section-title text-blue">
        Научно-образовательный центр «Проектный менеджмент и развитие кадрового потенциала»
      </h2>

      <p class="app__section-p">
        НОЦ «Проектный менеджмент и развитие кадрового потенциала» является структурным подразделением МГТУ имени Н.Э.
        Баумана и создан на базе кафедры <a href="http://ibm6.bmstu.ru/">ИБМ 6</a> «Бизнес-информатика».
      </p>

      <p class="app__section-p">Директор Центра — <a href="http://ibm.bmstu.ru/?p=2711">Дроговоз Павел Анатольевич</a>,
        заведующий кафедрой ИБМ 6, доктор
        экономических наук, профессор, почетный работник сферы образования РФ.</p>

      <p class="app__section-p">Целью деятельности Центра является создание системы организационных механизмов и
        инструментов, обеспечивающих активацию и координацию научно-исследовательской и научно-образовательной
        деятельности в области развития междисциплинарных проектных компетенций и кадрового потенциала в
        высокотехнологичных отраслях промышленности.</p>

      <p class="app__section-p">НОЦ «Проектный менеджмент и развитие кадрового потенциала промышленности» проводит
        научные исследования и разрабатывает учебно-методические материалы и системы сертификации в рамках выполнения
        государственных контрактов и хозяйственных договоров, реализации грантов российских и зарубежных общественных
        научных фондов.</p>

      <h3 class="app__section-small-title text-blue">ЗАДАЧИ ЦЕНТРА</h3>

      <app-card v-for="task in tasks" :key="task" class="fs-15">
        {{ task }}
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
</style>
