<template>
    <router-link to="/"> <h2>Voltar</h2> </router-link>
    <!--Add a Header-->
    <h1> Dados do contato </h1>
    <div id="contactName-table">
    <div id="contactName-header">
      <div id="contactName-table-rows">
        <div class="contactName-table-row">
          <textarea v-model="this.name">Nome: {{ this.name }}</textarea>
          <textarea v-model="this.cellNumber">Telefone: {{ this.cellNumber }}</textarea>
          <textarea v-model="this.address">Endereço: {{ this.address }}</textarea>
          <textarea v-model="this.email">E-mail: {{ this.email }}</textarea>
          <div>
                <router-link class="btn-update" :to="'/update/' + this.$route.params.id"> Editar </router-link>
                <button class="btn-delete" @click="deleteContact(this.id)"> Deletar </button>
          </div>
        </div>
      </div>
    </div>
</div>

    <!--Add a Footer-->

</template>
<!---->
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

    },
    async mounted() {
        const result = await axios.get("http://localhost:3000/contacts/"+this.$route.params.id);
            console.log(result.data);
            this.contact = result.data;
            this.name = result.data.name;
            this.cellNumber = result.data.cellNumber;
            this.address = result.data.address;
            this.email = result.data.email;
            
            console.log(result.data);
    },
    

}

</script>
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
.btn-delete,
.btn-update {
  background-color: rgba(171, 230, 235, 0.246);
  color: rgb(188, 36, 173);
  border: 2px solid black;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.btn-delete:hover,
.btn-update:hover {
  background-color: transparent;
  color: rgba(61, 18, 231, 0.864);
}
</style>