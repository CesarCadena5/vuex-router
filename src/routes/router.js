const { createRouter, createWebHashHistory } = require("vue-router");


const routes = [
    {
        path: '/',
        redirect: { name: '/pokemon' }
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import("@/modules/pokemon/layouts/PokemonLayout.vue"),
        children: [
            {
                path: 'list-pokemon',
                name: 'list-pokemon',
                component: () => import("@/modules/pokemon/pages/PokemonList.vue")
            },
            {
                path: 'detail/:id',
                name: 'pokemon-detail',
                component: () => import("@/modules/pokemon/pages/PokemonDetail.vue")
            },
            {
                path: '',
                name: 'redirect-list',
                redirect: { name: 'list-pokemon' }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import("@/modules/shared/pages/404.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router