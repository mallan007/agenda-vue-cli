<template>
    <router-link to="/add"> <h2>Adicionar novo contato</h2> </router-link>
    <h1> Detalhes do contato </h1>

    <table border="1">
        <tr>
            <td> ID </td>
            <td> Nome </td>
            <td> Celular </td>
            <td> Endereço </td>
            <td> Email </td>
            <td> Detalhes </td>
        </tr>
        <tr v-for="contact in contacts" :key="contact.id">
            <td> {{ contact.id }} </td>
            <td> {{ contact.name }} </td>
            <td> {{ contact.cellNumber }} </td>
            <td> {{ contact.address }} </td>
            <td> {{ contact.email }} </td>
            <td>
                <router-link :to="'/update/' + contact.id"> Editar </router-link>
                <button @click="deleteContact(contact.id)"> Deletar </button>
            </td>
        </tr>
    </table>

</template>
<script>
import axios from 'axios';

export default {
    name: 'DetailsPage',
    data() {
        return {
            name: '',
            cellNumber: '',
            address: '',
            email: '',
            contacts: [],
        }
    },
    components: {
    },
    methods: {
        async deleteContact(id) {
            let result = await axios.delete("http://localhost:3000/contacts/" + id);
            console.log(result);
            if (result.status == 200) {
                this.loadData();
            }
            alert(`${result.name} foi excluído com sucesso.`);

        },
        async loadData() {
            const result = await axios.get("http://localhost:3000/contacts");
            this.contacts = result.data;
            this.name = result.data.name;
            this.cellNumber = result.data.cellNumber;
            this.address = result.data.address;
            this.email = result.data.email;
            console.log(result.data);
        },
    },
    async mounted() {
        this.loadData();
    }

}

</script>