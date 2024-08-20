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
  <form class="max-w-md mx-auto">
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
    <div class="relative z-0 w-full mb-5 group">
    <button type="editContact"
      class="text-fuchsia-500 bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">
       <router-link :to="'/update/'+this.$route.params.id">
         Editar Contato </router-link>
      </button>
    </div>  
    <div class="relative z-0 w-full mb-5 group">
    <button type="editContact" @click="$router.push('/update/'+this.$route.params.id)"
      class="text-fuchsia-500 bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">
         Editar Contato com RoutePush
      </button>
    </div> 
    <div class="relative z-0 w-full mb-5 group">
    <button type="deleteContact" @click="deleteContact(this.id)"
      class="text-fuchsia-500 bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">
       Excluir Contato</button>
    </div> 
  
    <div class="relative z-0 w-full mb-5 group">
    <button type="route-home" @click="$router.push('/')"
      class="text-fuchsia-500 bg-fuchsia-700 hover:bg-sky-300 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-sky-200">
       Voltar</button>
    </div> 
    
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
