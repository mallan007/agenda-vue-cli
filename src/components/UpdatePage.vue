<script lang="ts">
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
      const result = await axios.put("http://localhost:3000/contacts/" + this.$route.params.id, {
        name: this.contact.name,
        cellNumber: this.contact.cellNumber,
        address: this.contact.address,
        email: this.contact.email,
      });

      if (result.status == 200) {
        alert('Contato atualizado com sucesso');
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/contacts/" + this.$route.params.id);
    console.log(result.data);
    this.contact = result.data;
  },
}                    
</script>
<!---->
<template>
  <h1> Editar Contato</h1>
  <form class="edit_contact">
    <div class="input-container">
      <label for="name"> Nome do Contato: </label>
      <input type="text" name="name" v-model="contact.name" placeholder="Informe o nome: " />
    </div>
    <div class="input-container">
      <label for="cellNumber"> Número de Telefone: </label>
      <input type="text" name="cellNumber" v-model="contact.cellNumber" placeholder="Informe o telefone: " />
    </div>
    <div class="input-container">
      <label for="address"> Endereço: </label>
      <input type="text" name="address" v-model="contact.address" placeholder="Informe o endereço: " />
    </div>
    <div class="input-container">
      <label for="email"> E-mail: </label>
      <input type="text" name="email" v-model="contact.email" placeholder="Informe o email: " />
    </div>
    <button class="btn-add" @click="updateContact"> Atualizar Contato </button>
  </form>
  <button class="btn-back" @click="$router.back()"> Voltar a Detalhes </button>
</template>
<!---->
<style scoped>
#edit_contact {
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

.btn-add,
.btn-back {
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

.btn-add:hover,
.btn-back:hover {
  background-color: transparent;
  color: rgba(61, 18, 231, 0.864);
}
</style>