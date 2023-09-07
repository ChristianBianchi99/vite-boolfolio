<script>
import ContactForm from '../components/ContactForm.vue';
import {store} from '../data/store.js';
export default {
    data(){
        return{
            store,
        }
    },
    components:{
        ContactForm,
    }
}
</script>
<template lang="">
    <div>
        <ContactForm/>
    </div>
</template>
<style lang="scss" scoped>
    
</style>