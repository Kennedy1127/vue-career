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
  faAngleDown,
  faAngleUp,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faMagnifyingGlass,
  faAngleLeft,
  faAngleRight,
  faLocationDot,
  faAngleDown,
  faAngleUp,
  faArrowUpRightFromSquare
);
library.add(faInstagram, faTwitter, faYoutube, faLinkedin, faFacebook);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
