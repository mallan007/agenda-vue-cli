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
  <!--Add a Header-->
  <div id="btn-add-link">
    <router-link to="/add"> <h3>Adicionar novo contato</h3> </router-link>
  </div>
  <div class="main-container">
    <div id="contactName-table">
      <h1>Lista de Contatos:</h1>
    </div>
    <div id="contactName-header">
      <div id="contactName-table-rows">
        <div class="contactName-table-row" v-for="contact in contacts" :key="contact.id"
        >
          <div class="contactName-table-cell">
            <router-link class="btn-details" :to="'/details/'+contact.id">{{ contact.name }} </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Add a Footer-->
</template>
<!---->
<style scoped>
#contactName-table {
  max-width: 500px;
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
  width: 100%;
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
#btn-add-link {
  max-width: 500px;
  margin: 0 auto;
  font-weight: bold;
  padding: 12px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
  color: black;
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
</style>