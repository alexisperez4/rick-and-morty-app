import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importa tu archivo de configuración de Vuex aquí

const app = createApp(App);

app.use(store); // Usa Vuex en tu aplicación

app.mount('#app');
