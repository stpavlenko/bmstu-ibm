<script setup>
import AppHeader from "@/components/header/AppHeader.vue";
import IbmSection from "@/components/IbmSection.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <app-header />

  <main>
    <ibm-section />

    <router-view />
  </main>

  <app-footer />
</template>
