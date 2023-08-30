<script>
import {store} from '../data/store.js';
export default{
  data(){
    return{
      store,
      links:[
        {
            label:  'Home',
            link:   '/',
        },
        {
            label:  'Projects',
            link:   '/projects',
        }
      ],
    }
  },
}
</script>
<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <a class="nav-link" href="#">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>
<style scoped lang="scss">
    
</style>