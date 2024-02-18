import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

import MainPage from "@/pages/MainPage.vue";

import './assets/scss/main.scss';

createApp(MainPage).mount('#app');

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
        return pages[`./pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})