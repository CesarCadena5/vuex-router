import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes/router';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
