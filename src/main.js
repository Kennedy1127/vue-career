import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '@/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMagnifyingGlass,
  faAngleLeft,
  faAngleRight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faAngleLeft, faAngleRight, faLocationDot);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
