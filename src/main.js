import { createApp } from "vue";
import "@/assets/scss/_global.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "@/router/index.js";
import AppCard from "@/components/UI/AppCard.vue";

const app = createApp(App);

app.use(router);

app.component("AppCard", AppCard);

app.use(PrimeVue, {
  unstyled: true,
});

app.mount("body");
