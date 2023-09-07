import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectsShow from './pages/ProjectsShow.vue';
import NotFound from './pages/NotFound.vue';
import ContactUs from './pages/ContactUs.vue';

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
        },
        {
            path:       '/contact-us',
            name:       'contact-us',
            component:  ContactUs,
        },
        {
            path:       '/not-found',
            name:       'not-found',
            component:  NotFound,
        },
        {
            path:       '/:catchAll(.*)',
            redirect:   '/not-found'
        }
    ],
});

export { router };