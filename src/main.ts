import { createApp } from 'vue';
import loadModules from '@/modules/loadModules';
import App from './App.vue';
import 'normalize.css/normalize.css';
import 'minireset.css/minireset.min.css';
import 'element-plus/dist/index.css';
import './assets/css/index.scss';

const app = createApp(App);
loadModules(app);

app.mount('#app');
