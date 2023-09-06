<script>
import {store} from '../data/store.js';
export default{
    data(){
        return{
        store,
        }
    },
    methods:{
        truncateText(text){
            if(text.length > 50){
                return text.substr(0,75)+'. . .';
            } else {
                return text
            }
        }
    }
}
</script>
<template lang="">
    <div class='container'>
        <div class="row">
            <div class='col-12'>
                <div class="card" v-for='project in store.projects' :key='project.id'>
                    <img :src="store.imageUrl+project.cover_image" class="card-img-top" :alt="project.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p class="card-text">{{ truncateText(project.description) }}</p>
                    </div>
                    <router-link :to="{ name: 'projects-show', params: { slug: project.slug } }" class="btn btn-primary">
                        Visualizza
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.col-12{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card{
        width: calc(100% / 3 - 10px);
        margin: 15px 0;
    }
}
</style>