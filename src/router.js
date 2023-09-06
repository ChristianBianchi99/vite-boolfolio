import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectsShow from './pages/ProjectsShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:       '/',
            name:       'home',
            component:  HomePage,
        },
        {
            path:       '/projects',
            name:       'projects',
            component:  ProjectsList,
        },
        {
            path:       '/projects/:slug',
            name:       'projects-show',
            component:  ProjectsShow,
        }
    ],
});

export { router };