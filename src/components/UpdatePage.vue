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
  <form class="max-w-md mx-auto">
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name" v-model="contact.name" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_name"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Nome: </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="tel" pattern="[0-9]{2}-[0-9]{1}-[0-9]{4}-[0-9]{4}" name="floating_cellNumber" id="floating_cellNumber" v-model="contact.cellNumber" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_cellNumber"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Número de Contato: </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_address" id="floating_address"  v-model="contact.address" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_address"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Endereço: </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" v-model="contact.email" 
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         E-mail: </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
    <button @click="updateContact" type="updateContact"
      class="text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">
       Atualizar Contato</button>
    </div>   
    <div class="relative z-0 w-full mb-5 group">
    <button type="route-back" @click="$router.back()"
    class="text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">
     Voltar a Detalhes </button>
   </div>
  </form>
</template>
<!---->
<style scoped>

</style>
