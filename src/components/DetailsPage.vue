<script>
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
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
      let result = await axios.delete("http://localhost:3000/contacts/" + this.$route.params.id);
      console.log(result);
      if (result.status == 200) {
        //this.loadData();
        this.$router.push("/");
      }
      alert(`${this.name} foi excluído com sucesso.`);
    },
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/contacts/" + this.$route.params.id);
    console.log(result.data);
    this.contact = result.data;
    this.name = result.data.name;
    this.cellNumber = result.data.cellNumber;
    this.address = result.data.address;
    this.email = result.data.email;
    console.log(result.data);
  },
})
</script>
<!---->
<template>
  <div id="contactName-table">
    <h1> Dados do contato </h1>
    <div id="contactName-header">
      <div id="contactName-table-rows">
        <div class="contactName-table-row">
          <span class="tabler--address-book"></span>
          <textarea v-model="this.name">Nome: {{ this.name }}</textarea><br>
          <span class="mdi--telephone-outline"></span>
          <textarea v-model="this.cellNumber">Telefone: {{ this.cellNumber }}</textarea><br>
          <span class="tabler--address-book"></span>
          <textarea v-model="this.address">Endereço: {{ this.address }}</textarea><br>
          <span class="ic--outline-email"></span>
          <textarea v-model="this.email">E-mail: {{ this.email }}</textarea><br>
          <div>
            <router-link class="btn-update" :to="'/update/' + this.$route.params.id"> Editar </router-link>
            <button class="btn-delete" @click="deleteContact(this.id)"> Deletar </button>
          </div>
          
        </div>
      </div>
    </div>
    <button class="btn-back" @click="$router.back()">Voltar ao Início</button>
  </div>
</template>
<!---->
<style scoped>
#contactName-table {
  max-width: 500px;
  margin: 0 auto;
  justify-content: left;

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

.btn-back {
  margin-top: 50px;
}

.btn-delete,
.btn-update,
.btn-back {
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
.btn-update:hover,
.btn-back:hover {
  background-color: transparent;
  color: rgba(61, 18, 231, 0.864);
}

.mdi--telephone-outline {
  display: inline-block;
  width: 2em;
  height: 2em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.ic--outline-email {
  display: inline-block;
  width: 2em;
  height: 2em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tabler--address-book {
  display: inline-block;
  width: 2em;
  height: 2em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M10 16h6'/%3E%3Cpath d='M11 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 8h3m-3 4h3m-3 4h3'/%3E%3C/g%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.mdi--user {
  display: inline-block;
  width: 2em;
  height: 2em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>