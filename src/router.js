import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './components/Layout/Homepage.vue';
import ListComponent from './components/ListComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Homepage },
        { 
            path: '/:genreId', 
            component: ListComponent, 
            props: true,
            children: [
                { path: ':bandId', component: ListComponent },
            ],
        },
    ],
});

export default router;