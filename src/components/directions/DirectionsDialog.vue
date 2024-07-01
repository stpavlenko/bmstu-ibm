<script setup>
import Dialog from "primevue/dialog";

const { direction } = defineProps({ direction: Object });
</script>

<template>
  <Dialog modal>
    <template #container="{ closeCallback }">
      <div class="modal" @click.self="closeCallback">
        <div class="modal__content">
          <span class="text-blue title">{{ direction.title }}</span>

          <p>
            <span v-if="direction.isBachelor">ЕГЭ: {{ direction.exams }}</span>
            <span v-else-if="direction.isMagistracy">Вступительные испытания</span>
            <span v-else>Вступительные испытания: ({{ direction.exams }})</span>

            <br />
            Стоимость обучения {{ direction.cost }} / руб./год
          </p>

          <div class="grid" :style="{'grid-template-columns': `repeat(${direction.isMagistracy ? 4 : 3}, auto)`}">
            <span>
              Кафедры / <br />
              <span class="text-blue">Профиль</span>
            </span>

            <span v-if="!direction.isPostgraduate"> Минимальный проходной балл </span>

            <span class="text-align-center"> Количество мест </span>

            <span v-if="direction.isMagistracy || direction.isPostgraduate" class="text-align-center"> Вступительные испытания </span>

            <span class="row-border"></span>

            <template v-for="department in direction.departments">
              <span>
                {{ department.department }} / <br />
                <span class="text-blue">{{ department.profile }}</span>
              </span>

              <div v-if="!direction.isPostgraduate" class="score">
                <!--бюджет + внебюджет-->
                <template v-if="department.minimumScore.length > 1">
                  <div>
                    <span v-if="department.minimumScore[0]" class="text-blue">
                      {{ department.minimumScore[0] }}
                    </span>

                    <span v-else class="text-blue">---</span>

                    <br />

                    <span>бюджет</span>
                  </div>

                  <div>
                    <span class="text-blue">
                      {{ department.minimumScore[1] }}
                    </span>

                    <br />

                    <span>внебюджет</span>
                  </div>
                </template>

                <!-- одно поле-->
                <template v-else>
                  <span class="text-blue">
                      {{ department.minimumScore[0] }}
                    </span>
                </template>
              </div>


              <div class="places">
                <div>
                    <span v-if="department.places[0]" class="text-blue">
                      {{ department.places[0] }}
                    </span>

                  <span v-else class="text-blue">---</span>

                  <br />

                  <span>бюджет</span>
                </div>

                <div>
                    <span class="text-blue">
                      {{ department.places[1] }}
                    </span>

                  <br />

                  <span>внебюджет</span>
                </div>
              </div>

              <a v-if="department.entranceExam" :href="department.entranceExam" @click="closeCallback"
                 class="entrance text-blue">Ссылка</a>

              <span class="row-border"></span>
            </template>
          </div>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(black, 0.5);
  padding-inline: 2rem;

  &__content {
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: white;
    padding: 1.5rem 4rem;
    border-radius: 0.625rem;
    max-height: 90dvh;
    overflow: auto;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 5rem;
}

.row-border {
  height: 3px;
  background-color: $bg-secondary;
  grid-column: 1 / -1;
  margin-block: 1rem;
}

.title {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.score,
.places, .entrance {
  text-align: center;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.entrance {
  text-decoration: none;
}
</style>
