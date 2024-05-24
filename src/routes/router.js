import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: { name: 'list-pokemon' }
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
                path: 'search-pokemon',
                name: 'search-pokemon',
                component: () => import("@/modules/pokemon/pages/PokemonSearch.vue")
            },
            {
                path: 'detail/:id',
                name: 'pokemon-detail',
                component: () => import("@/modules/pokemon/pages/PokemonDetail.vue"),
                children: [
                    {
                        path: 'abilities/:nameAbility',
                        component: () => import("@/modules/pokemon/components/PokemonAbilities.vue"),
                        name: 'pokemon-ability-name',
                        props: ({ params }) => {
                            return { nameAbility: params.nameAbility };
                        }
                    }
                ]
            },
            {
                path: '',
                name: 'redirect-list',
                redirect: { name: 'list-pokemon' }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import("@/modules/dbz/layouts/DbzLayout.vue"),
        children: [
            {
                path: 'list',
                name: 'dbz-list',
                component: () => import("@/modules/dbz/pages/DbzList.vue")
            },
            {
                path: 'search',
                name: 'dbz-search',
                component: () => import("@/modules/dbz/pages/DbzSearch.vue")
            },
            {
                path: 'detail/:id',
                name: 'dbz-detail',
                component: () => import("@/modules/dbz/pages/DbzDetail.vue"),
                props: ({ params }) => {
                    return { id: params.id };
                }
            },
            {
                path: '',
                name: 'dbz-redirect-list',
                redirect: { name: 'dbz-list' }
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