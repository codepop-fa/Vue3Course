import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from '@/components/BaseIcon.vue';
import BaseButton from '@/components/BaseButton.vue';

const app = createApp(App)
app.component('BaseIcon', BaseIcon)
app.component('BaseButton', BaseButton)
  .use(store)
  .use(router)
  .mount('#app')
