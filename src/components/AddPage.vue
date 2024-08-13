<script lang="ts">

import type IContact from '@/interfaces/IContact.ts';
import axios from 'axios';
import { defineComponent } from "vue";

export default defineComponent({
    name: "AddPage",
    data() {
        return {
            contact: {} as IContact [],
        };
    },
    methods: {
        async addNewContact(e:any) {
            e.preventDefault();
            
            const result = await axios.post("http://localhost:3000/contacts", {
                    name: this.contact.name,
                    cellNumber: this.contact.cellNumber,
                    address: this.contact.address,
                    email: this.contact.email
                });
                console.log(result);
                if(result.status == 201){
                    alert('Contato criado com sucesso');
                    this.$router.push({name:'HomeView'});
                    //this.$router.push("/");
                }
            },
        },
})
</script>

<template>
    <div>
        <form id="contact-form">
            <div class="input-container">
                <label for="name"> Nome do Contato: </label>
                <input type="text" name="name" v-model="contact.name" placeholder="Digite o Nome" />
            </div>
            <div class="input-container">
                <label for="cellNumber"> Número de Telefone: </label>
                <input type="text" name="cellNumber" v-model="contact.cellNumber"
                    placeholder="Digite o Telefone" />
            </div>
            <div class="input-container">
                <label for="address"> Endereço: </label>
                <input type="text" name="address" v-model="contact.address" placeholder="Digite o Endereço" />
            </div>
            <div class="input-container">
                <label for="email"> E-mail: </label>
                <input type="text" name="email" v-model="contact.email" placeholder="Digite o E-mail" />
            </div>
            <div>
                <button @click="addNewContact" type="submit" class="btn-add">Adicionar Contato</button>
            </div>
        </form>
    </div>
</template>


<style scoped>
#contact-form {
    max-width: 400px;
    margin: 0 auto;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

label {
    font-weight: bold;
    margin-bottom: 15px;
    color: solid black;
    padding: 5px 10px;
    border-left: 4px solid rgb(188, 36, 173);
    color: rgb(188, 36, 173);
}

input {
    padding: 5px 10px;
    width: 300px;
}

.btn-add {
    background-color: rgba(171, 230, 235, 0.246);
    color: rgb(188, 36, 173);
    font-weight: bold;
    border: 2px solid black;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
}

.btn-add:hover {
    background-color: transparent;
    color: rgba(61, 18, 231, 0.864);
}
</style>