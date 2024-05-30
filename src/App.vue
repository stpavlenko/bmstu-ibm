<script setup>
import AppHeader from "@/components/header/AppHeader.vue";
import IbmSection from "@/components/IbmSection.vue";
import DepartmentsSection from "@/components/DepartmentsSection.vue";
import DirectionsSection from "@/components/DirectionsSection.vue";
import ManagersSection from "@/components/managers/ManagersSection.vue";
import PublicationsSection from "@/components/publications/PublicationsSection.vue";
import AppFooter from "@/components/AppFooter.vue";
import NewsSection from "@/components/news/NewsSection.vue";
import EventsSection from "@/components/events/EventsSection.vue";
</script>

<template>
  <app-header />

  <main>
    <ibm-section />

    <news-section />

    <departments-section />

    <directions-section />

    <managers-section />

    <events-section />

    <publications-section />
  </main>

  <app-footer />
</template>
