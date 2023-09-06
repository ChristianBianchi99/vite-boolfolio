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
                    this.$router.push({ name: 'not-found'});
                }
            })
        }
    },
}
</script>
<template lang="">
    <div>
        <h1>
            Project-show
        </h1>
    </div>
</template>
<style lang="scss" scoped>
.row{
    margin: 100px 0;
}
</style>