import { createRouter, createWebHistory } from 'vue-router';

import Menu from './components/Menu.vue';  
import MenuItem from './components/MenuItem.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: Menu,
            children: [
                {
                    path: ':genre',
                    component: MenuItem,
                    props: true,
                },
                {
                    path: ':genre/:id',
                    component: MenuItem,
                    props: true,
                }
            ],
        },
    ],
});

export default router;