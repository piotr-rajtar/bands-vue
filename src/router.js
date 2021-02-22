import { createRouter, createWebHistory } from 'vue-router';

//import Homepage from './components/Layout/Homepage.vue';
//import ListComponent from './components/ListComponent.vue';
import Menu from './components/Menu.vue';  
import MenuItem from './components/MenuItem.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/menu' },
        {
            path: '/menu',
            component: Menu,
            children: [
                {
                    path: ':genre',
                    component: MenuItem,
                    props: true,
                    children: [
                        {
                            path: ':id',
                            name: 'band',
                            component: MenuItem,
                        },
                    ],
                },
            ],
        },
    ],
});

export default router;