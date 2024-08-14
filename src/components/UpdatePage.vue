<template>

    <h1> Editar Contato</h1>
    <form class="editContact">
        <input type="text" name="name" v-model="contact.name" placeholder="Informe o nome: "/>
        <input type="text" name="cellNumber" v-model="contact.cellNumber" placeholder="Informe o número de telefone: "/>
        <input type="text" name="address" v-model="contact.address" placeholder="Informe o endereço: "/>
        <input type="text" name="email" v-model="contact.email" placeholder="Informe o email: "/>
        <button @click="updateContact"> Atualizar Contato </button>
    </form>    
</template>
<script>

import axios from 'axios';

    export default {
        name: 'UpdateView',
        components: {
        },
        data() {    
            return {        
                contact: {
                    name: '',
                    cellNumber: '',
                    address: '',   
                    email: ''
                }
            }
        },
        methods: {  
            async updateContact() {
                console.log(this.contact);
                const result = await axios.put("http://localhost:3000/contacts/"+this.$route.params.id, {
                    name: this.contact.name,
                    cellNumber: this.contact.cellNumber,
                    address: this.contact.address,
                    email: this.contact.email,
                });

                if(result.status == 200){
                    alert('Contato atualizado com sucesso');
                    this.$router.push({name:'HomeView'});
                }
                
            },   
        },   
        async mounted() {
            const result = await axios.get("http://localhost:3000/contacts/"+this.$route.params.id);
            console.log(result.data);
            this.contact = result.data;  
        },
        
    }                    
        
</script>