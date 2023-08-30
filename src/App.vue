<script>
import axios from 'axios';
import Header from './components/AppHeader.vue';
import {store} from './data/store.js';

export default{
  data(){
    return{
      store,
    }
  },
  components:{
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
  <Header class="header"/>
  <router-view class="main"></router-view>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
  .header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }
  .main{
    margin-top: 50px;
  }
</style>
