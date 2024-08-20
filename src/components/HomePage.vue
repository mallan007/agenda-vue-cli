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
<!---->
<template>
  <div class="main-container">
    <div id="contactName-table">
    </div>
    <div id="contactName-header">
      <router-link to="/add" class="btn-add-link">Adicionar novo contato</router-link>
      <h1>Lista de Contatos:</h1>
      <div id="contactName-table-rows">
        <div class="contactName-table-row" v-for="contact in contacts" :key="contact.id">
          <div class="contactName-table-cell">
            <router-link class="btn-details" :to="'/details/' + contact.id">{{ contact.name }} </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1>Teste com Tailwind</h1>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <router-link to="/add" class="btn-add-link">Adicionar novo contato</router-link>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Lista de Contatos
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th v-for="contact in contacts" :key="contact.id"
                  scope="row" class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <router-link :to="'/details/' + contact.id"> {{ contact.name }} </router-link>
                </th>
            </tr>
        </tbody>
    </table>
</div>

</template>
<!---->
<style scoped>
#contactName-table {
  max-width: 300px;
  margin: 0 auto;
}

#contactName-table-header,
#contactName-table-rows,
.contactName-table-row {
  display: list-item;
  flex-wrap: wrap;
}

#contactName-table-header {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid black;
}

.contactName-table-row {
  width: 300px;
  padding: 12px;
  border: 1px solid antiquewhite;
}

.btn-details {
  background-color: rgba(171, 230, 235, 0.246);
  color: rgb(188, 36, 173);
  border: 2px solid black;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.btn-details:hover {
  background-color: transparent;
  color: rgba(61, 18, 231, 0.864);
}

.btn-add-link {
  max-width: 300px;
  margin: 0 auto;
  font-weight: bold;
  padding: 12px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
  color: black;
  justify-content: left;
}

.btn-details,
.btn-add-link {
  background-color: rgba(171, 230, 235, 0.246);
  color: rgb(188, 36, 173);
  border: 2px solid black;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.btn-details:hover,
.btn-add-link:hover {
  background-color: transparent;
  color: rgba(61, 18, 231, 0.864);
}
</style>