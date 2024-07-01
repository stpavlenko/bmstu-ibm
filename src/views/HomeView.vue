<script setup>
import NewsSection from "@/components/news/NewsSection.vue";
import PublicationsSection from "@/components/publications/PublicationsSection.vue";
import EventsSection from "@/components/events/EventsSection.vue";
import DepartmentsSection from "@/components/DepartmentsSection.vue";
import ManagersSection from "@/components/managers/ManagersSection.vue";
import DirectionsSection from "@/components/directions/DirectionsSection.vue";
</script>

<template>
  <news-section />

  <departments-section />

  <directions-section />

  <managers-section />

  <events-section />

  <publications-section />
</template>
