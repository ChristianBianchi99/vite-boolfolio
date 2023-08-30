<script>
import axios from 'axios';
import Main from './components/AppMain.vue';
import Header from './components/AppHeader.vue';
import {store} from './data/store.js';

export default{
  data(){
    return{
      store,
    }
  },
  components:{
    Main,
    Header,
  },
  mounted(){
    this.getProjects();
  },
  methods:{
    getProjects(){
      store.projects= '';
      axios.get(store.baseApiUrl + '/api/projects').then((response) => {
        store.projects = response.data.results;
      });
    }
  }
}
</script>

<template>
  <Header/>
  <router-view></router-view>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
