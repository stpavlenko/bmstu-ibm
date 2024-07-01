<script setup>

import AppCard from "@/components/UI/AppCard.vue";
</script>

<template>
  <section class="app__section">
    <div class="wrapper commission">
      <h2 class="app__section-title text-blue text-uppercase">ПРИЕМНАЯ ОТБОРОЧНАЯ КОМИССИЯ</h2>

      <h3 class="app__section-small-title text-blue text-uppercase">Правила приёма на обучение по программам
        бакалавриата</h3>

      <p class="app__section-p">Прием документов от поступающих на 1-й курс начинается с 20 июня.
        Прием документов для поступающих на места для обучения на <span class="text-blue">бюджетной</span> основе
        завершается:</p>

      <div class="container">
        <app-card>
          <p class="app__section-p">
            При поступлении по результатам общеобразовательных вступительных испытаний, проводимых МГТУ имени Н.Э.
            Баумана самостоятельно — в 18:00 14 июля по московскому времени
          </p>
        </app-card>

        <app-card>
          <p class="app__section-p">
            Во всех иных случаях, в том числе при поступлении только по результатам ЕГЭ, — в 18:00 25 июля по
            московскому времени
          </p>
        </app-card>
      </div>

      <p class="app__section-p">
        Прием документов для поступающих на места для обучения на <span class="text-blue">платной</span> основе
        завершается в 14:00 05 августа по
        московскому времени при условии наличия необходимых результатов вступительных испытаний.
      </p>

      <div class="app__section-p">
        <p>Время работы приемной комиссии в период с 20 июня по 14 августа:</p>

        <ul>
          <li>с понедельника по пятницу с 10 до 18 часов</li>
          <li>в субботу с 10 до 14 часов</li>
        </ul>
      </div>

      <p class="app__section-p">
        Подробнее о правилах приема на обучение по программам бакалавриата и документах, необходимых для поступления, вы
        можете узнать <a href="https://bmstu.ru/documents" class="text-blue">здесь.</a> <br>
        Минимально необходимые для поступления значения баллов можно посмотреть
        <a href="/#directions" class="text-blue">здесь.</a>
        <br>
        План приема на обучение по программам бакалавриата в 2024 году можно посмотреть <a
        href="https://api.www.bmstu.ru/file/100675/download" class="text-blue">здесь.</a> <br> <br>
        Подробнее о программе Шаг в будущее вы можете узнать <a
        href="https://olymp.bmstu.ru/ru/for-patricipants" class="text-blue">здесь.</a> <br>
        Подробнее о стоимости обучения, сроках и способах оплаты можно узнать <a
        href="https://isot.bmstu.ru/edu/abiturient/" class="text-blue">здесь.</a> <br>
        Подробнее о целевом обучении можно узнать <a href="https://api.www.bmstu.ru/file/109777/download"
                                                     class="text-blue">здесь.</a>
      </p>

      <h3 class="app__section-small-title text-blue text-uppercase">Правила приёма в магистратуру</h3>

      <p class="app__section-p">
        Прием документов от поступающих начинается с 01 июля. <br>
        Прием документов для поступающих на места для обучения на бюджетной основе завершается в 18:00 31 июля по
        московскому времени. <br> <br>
        Прием документов для поступающих на места для обучения на платной основе завершается в 18:00 31 июля по
        московскому времени при условии наличия необходимых результатов вступительных испытаний. <br> <br>
        Прием документов на вакантные места для обучения на платной основе завершается в 17:00 25 августа по московскому
        времени. <br> <br>
        Зачисление на программы подготовки магистров проводится на основе конкурса по результатам вступительных
        испытаний, проводимых МГТУ имени Н.Э. Баумана самостоятельно. Вступительными испытаниями для лиц, поступающих в
        магистратуру, являются письменные экзамены (междисциплинарные или же по профильной общепрофессиональной
        дисциплине), проводимые Университетом самостоятельно в рамках направлений магистратуры согласно программам,
        утверждаемым ректором МГТУ им. Н.Э. Баумана. <br> <br>
        Все вступительные испытания начинаются в 9:00. <br>
        Подробнее о <a href="https://api.www.bmstu.ru/file/89701/download" class="text-blue">дистанционных вступительных
        испытаниях</a>
        <br>
        Подробнее о правилах приема на обучение по программам магистратуры в МГТУ имени Н.Э. Баумана вы можете
        узнать <a href="https://bmstu.ru/magistracy/entrance_master" class="text-blue">здесь</a> <br>
        План приема в магистратуру в 2024 году можно посмотреть <a href="https://api.www.bmstu.ru/file/110097/download"
                                                                   class="text-blue">здесь</a> <br>
        Перечень учитываемых индивидуальных достижений при поступлении в магистратуру <a
        href="https://api.www.bmstu.ru/file/110911/download" class="text-blue">здесь</a>
      </p>

      <div class="container">
        <app-card>
          <p class="app__section-p">Шкала оценок: 100 баллов; минимально необходимый балл 27.</p>
        </app-card>

        <app-card>
          <p class="app__section-p">
            Максимальное количество баллов с учетом индивидуальных достижений по остальным направлениям подготовки – 125
            баллов. </p>
        </app-card>
      </div>

      <h3 class="app__section-small-title text-blue text-uppercase">Правила приёма в аспирантуру</h3>

      <p class="app__section-p">Подробнее о поступлении в аспирантуру можно узнать <a
        href="http://ibm.bmstu.ru/?page_id=1020" class="text-blue">здесь</a></p>

      <app-card class="contacts">
        <h3 class="app__section-small-title text-blue text-uppercase">КОНТАКТЫ ПРИЕМНОЙ КОМИССИИ</h3>

        <p class="app__section-p mt-2">
          Почта: <a href="mailto:ibmpk@bmstu.ru" class="text-blue">ibmpk@bmstu.ru</a> <br>
          Телефон: <a href="tel:+7 (499) 263-62-58" class="text-blue">+7 (499) 263-62-58</a> <br>
          Адрес: 2-я Бауманская улица, 5, Москва <br>
          Сайт: <a href="http://priem.bmstu.ru" class="text-blue">http://priem.bmstu.ru</a> <br>
          Вконтакте: <a href="https://vk.com/ibm_priem" class="text-blue">https://vk.com/ibm_priem</a> <br>
          Телеграм: <a href=" https://telegram.me/ibm_priem" class="text-blue">@ibm_priem</a> <br> <br>

          ВРЕМЯ РАБОТЫ: <br>
          ПН-ПТ: 10:00–18:00 <br>
          СБ: 10:00–14:00 <br>
          ВС: выходной
        </p>
      </app-card>
    </div>
  </section>
</template>

<style scoped lang="scss">
ul {
  padding-left: 2rem;
}

.commission {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container {
  display: flex;
  gap: 2rem;

  & > * {
    width: 50%;
  }
}

.contacts {
  text-align: center;
}
</style>
