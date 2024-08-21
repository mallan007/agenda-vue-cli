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
  <form class="max-w-md mx-auto shadow-md sm:rounded-lg bg-gray-300">
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name" v-model="this.name" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " disabled readonly />
      <label for="floating_name"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Nome: </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="tel" pattern="[0-9]{2}-[9]{1}-[0-9]{4}-[0-9]{4}" name="floating_cellNumber" id="floating_cellNumber" v-model="this.cellNumber" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " disabled readonly />
      <label for="floating_cellNumber"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Número de Contato: </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_address" id="floating_address" v-model="this.address" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " disabled readonly />
      <label for="floating_address"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Endereço: </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <span class="icon-[ic--outline-email]" style="width: 48px; height: 48px;">
      <input type="email" name="floating_email" id="floating_email" v-model="this.email" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " disabled readonly />
      <label for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         E-mail: </label>
         </span>
    </div>

    <button @click="$router.push('/update/'+this.$route.params.id)"
    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
    rounded-lg group bg-gradient-to-br from-fuchsia-500 to-pink-500 group-hover:from-fuchsia-500 group-hover:to-pink-500 hover:text-white 
    dark:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:focus:ring-fuchsia-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        <router-link :to="'/update/'+this.$route.params.id">
          Editar Contato </router-link>
      </span>
    </button>
    <button @click="$router.push('/')"
    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
    rounded-lg group bg-gradient-to-br from-fuchsia-500 to-pink-500 group-hover:from-fuchsia-500 group-hover:to-pink-500 hover:text-white 
    dark:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:focus:ring-fuchsia-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Voltar
      </span>
    </button>
    <button @click="deleteContact(this.id)"
    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
    rounded-lg group bg-gradient-to-br from-fuchsia-500 to-pink-500 group-hover:from-fuchsia-500 group-hover:to-pink-500 hover:text-white 
    dark:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:focus:ring-fuchsia-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Excluir Contato
      </span>
    </button>

  </form>
</template>
<style scoped>

</style>
<!----
Erro do Tailwind na rota de Update

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

-->
