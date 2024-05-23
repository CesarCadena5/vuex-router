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
        path: '/:pathMatch(.*)*',
        component: () => import("@/modules/shared/pages/404.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router