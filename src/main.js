import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import insertPanel from "./components/insertPanel.vue";

createApp(App).component('insert-panel',insertPanel).use(store).use(router).mount('#app');
