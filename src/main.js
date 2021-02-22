import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import MenuItem from './components/MenuItem.vue';

const app = createApp(App);

app.component('menu-item', MenuItem);

app.use(router);

app.mount('#app');
