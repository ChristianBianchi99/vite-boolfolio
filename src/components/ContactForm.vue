<script>
import axios from 'axios';
import {store} from '../data/store.js';
export default {
    data(){
        return{
            store,
            name: '',
            email: '',
            content: '',
            success: null,
            errors: {},
            loading: false,
        }
    },
    methods:{
        sendForm(){
            this.loading = true;

            const data = {
                name: this.name,
                email: this.email,
                content: this.content,
            }

            this.errors = {};

            // Effettuo la chiamata axios in post
            axios.post(`${this.store.baseApiUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if(!this.success){
                    this.errors = response.data.errors;
                } else {
                    this.name = '';
                    this.email = '';
                    this.content = '';
                }

                this.loading = false;
            })
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">
                        Contattaci
                    </h2>
                    <p v-if="success">
                        Email inviata correttamente
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="sendForm()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Inserisci il nome</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="nome" v-model="name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Inserisci un email</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Contenuto</label>
                            <textarea class="form-control" name="content" id="content" rows="3" v-model="content"></textarea>
                        </div>
                        <button class="btn btn-primary" type="submit" :disable="success">
                            {{ loading ? 'Invio email in corso' : 'Invia'}}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>