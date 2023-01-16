import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from './router'
import vuetify from './plugins/vuetify';
import './style.css'

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
