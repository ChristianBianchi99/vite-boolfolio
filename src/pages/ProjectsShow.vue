<script>
import axios from 'axios';
import {store} from '../data/store.js';
export default {
    data(){
        return{
            store,
            project: '',
        }
    },
    created(){
        this.getSingleProject()
    },
    methods:{
        getSingleProject(){
            axios.get(store.baseApiUrl + '/api/projects/' + this.$route.params.slug).then((response) => {
                if(response.data.success){
                    this.project = response.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            })
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="img-container">
                        <img :src="store.imageUrl+project.cover_image" :alt="project.name">
                    </div>
                </div>
                <div class="col-8">
                    <div class="content">
                        <div class="title">
                            <h3>
                                {{ project.name }}
                            </h3>
                            <div class="badge text-bg-primary">
                                <!-- {{ project.type.name }} -->
                            </div>
                        </div>
                        <p>
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.row{
    margin: 100px 0;
    background-color: rgb(248, 249, 250);
    padding: 15px;
    border-radius: 20px;
    align-self: center;
}
.title{
    display: flex;
    .badge{
        align-self: center;
        margin-left: 15px;
    }
}
.img-container{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    img{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
</style>