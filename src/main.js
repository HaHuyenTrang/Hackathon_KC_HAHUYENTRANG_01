import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "vuetify/styles"
import * as components from "vuetify/components";
import * as directives from "vuetify/directives"
import { createVuetify } from 'vuetify';
import router from './routes'

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App)
app.use(router);
app.use(vuetify)
app.mount("#app")

