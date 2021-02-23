import { createRouter, createWebHistory } from 'vue-router';

import ContentContainer from './components/ContentContainer.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ContentContainer,
        },
        {
            path: '/:genre',
            props: true,
            component: ContentContainer,
        },
        {
            path: '/:genre/:band',
            props: true,
            component: ContentContainer,
        },
        {
            path: '/:genre/:band/:musician',
            props: true,
            component: ContentContainer,
        },
    ],
});

export default router;