<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { newsItems } from "@/assets/mock/index.js";
import NewsItem from "@/components/news/NewsItem.vue";
</script>

<template>
  <section class="news">
    <div class="wrapper">
      <swiper
        :modules="[Pagination, Navigation]"
        :space-between="140"
        :pagination="{ clickable: true }"
        :loop="true"
        navigation
        :style="{
          '--swiper-pagination-bullet-size': '16px',
          '--swiper-pagination-color': '#1358BE',
          '--swiper-navigation-color': '#fff',
        }"
      >
        <swiper-slide v-for="news in newsItems" :key="news.title">
          <news-item :item="news" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.news {
  background-color: $bg-4;
}

:root {
  --swiper-pagination-bullet-size: 16px;
}

.swiper-pagination-bullet {
  background-color: transparent !important;
  border: 1px solid $bg-secondary !important;
  opacity: 1 !important;
}

.swiper-pagination-bullet-active {
  background-color: $bg-secondary !important;
}
</style>
