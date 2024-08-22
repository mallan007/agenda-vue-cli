<script lang="ts">
import axios from 'axios';

export default {
  name: 'AddPage',
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
    async addNewContact() {
      console.log(this.contact);
      if (this.contact.name == '' || this.contact.cellNumber == '' || this.contact.address == '' || this.contact.email == '') {
        alert("Preencha todos os campos vazios");
        return;
      }
      const result = await axios.post("http://localhost:3000/contacts", {
        name: this.contact.name,
        cellNumber: this.contact.cellNumber,
        address: this.contact.address,
        email: this.contact.email
      });
      console.log(result);
      if (result.status == 201) {
        alert(`${this.contact.name} foi adicionado com sucesso.`);
        this.$router.push("/");
      }
      
    },
  },
}
</script>
<!---->
<template>
  <form class="max-w-md mx-auto shadow-md sm:rounded-lg">
    <div flex items-center gap-2 class="mx-auto w-full shadow-md sm:rounded-lg px-2.5 py-2.5 text-center inline-flex items-center bg-gray-300">
      <svg class="w-6 h-6 text-stone-950 dark:text-stone-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
    </svg>
     Adicionar Novo Contato
  </div>
  <br>
  <br>
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name" v-model="contact.name"
        class="block py-7 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder="Nome Completo" required />
      <label for="floating_name"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Nome do Contato</label>
    </div>
    <div class="relative z-0 w-full mb-5 group"> 
      <input type="tel" pattern="[0-9]{2}-[9]{1}-[0-9]{4}-[0-9]{4}" name="floating_cellNumber" id="floating_cellNumber" v-model="contact.cellNumber"
        class="block py-7 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder="85-9-XXXX-XXXX" required />
      <label for="floating_cellNumber"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Número do Contato</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_address" id="floating_address" v-model="contact.address"
        class="block py-7 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder="Logradouro, Cidade, Número" required />
      <label for="floating_address"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Endereço do Contato</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" v-model="contact.email"
        class="block py-7 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder="nome@email.com" required />
      <label for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         E-mail do Contato</label>
    </div>
  <button @click="addNewContact"
    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
    rounded-lg group bg-gradient-to-br from-fuchsia-500 to-pink-500 group-hover:from-fuchsia-500 group-hover:to-pink-500 hover:text-white 
    dark:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:focus:ring-fuchsia-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Adicionar Novo Contato 
      </span>
    </button>
    <button @click="$router.push('/')"
    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
    rounded-lg group bg-gradient-to-br from-fuchsia-500 to-pink-500 group-hover:from-fuchsia-500 group-hover:to-pink-500 hover:text-white 
    dark:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:focus:ring-fuchsia-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Cancelar
      </span>
    </button>
  </form>
 
</template>
<!---->
<style scoped></style>