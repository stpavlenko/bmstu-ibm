<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { events } from "@/assets/mock/index.js";
import EventsItem from "@/components/events/EventsItem.vue";
</script>

<template>
  <section class="events app__section">
    <div class="wrapper">
      <swiper
        :modules=[Pagination]
        :space-between="140"
        :pagination="{ clickable: true }"
        :loop="true"
        :style="{
          '--swiper-pagination-bullet-size': '16px',
          '--swiper-pagination-color': '#FFF',
        }"
      >
        <swiper-slide v-for="event in events" :key="event.title">
          <events-item :item="event" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.events {
  background-color: $bg-secondary;
}
</style>
