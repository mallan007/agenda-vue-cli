<script>
import axios from 'axios';

export default {
  name: 'HomePage',
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

<template>
  <h1> Lista de Contatos </h1>

  <table border="1">
    <tr>
      <td> Todos os contatos </td>
    </tr>
    <tr v-for="contact in contacts" :key="contact.id">
      <td> <router-link :to="'/details/'+contact.id">{{ contact.name }} </router-link> </td>
    </tr>
  </table>

</template>