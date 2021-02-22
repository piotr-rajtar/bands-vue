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
                    children: [
                        {
                            path: ':id',
                            component: MenuItem,
                            props: true,
                        }
                    ],
                },
                // {
                //     name: 'musicians',
                //     path: ':genre/:id',
                //     component: {musicians: MenuItem},
                //     props: true,
                // }
            ],
        },
    ],
});

export default router;