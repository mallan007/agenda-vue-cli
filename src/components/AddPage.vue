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
      const result = await axios.post("http://localhost:3000/contacts", {
        name: this.contact.name,
        cellNumber: this.contact.cellNumber,
        address: this.contact.address,
        email: this.contact.email
      });
      console.log(result);
      if (result.status == 201) {
        alert('Contato criado com sucesso');
        this.$router.push("/");
      }
      alert(`${this.contact.name} foi adicionado com sucesso.`);
    },
    /*
    checkForm: function (e) {
      this.errors = [];
      //testar se é preciso iniciar NULL vs VAZIO
      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    */
  },
}
</script>
<!---->
<template>
  <form class="max-w-md mx-auto">
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name"
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_name"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome
        do Contato</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="tel" pattern="[0-9]{2}-[9]{1}-[0-9]{4}-[0-9]{4}" name="floating_cellNumber" id="floating_cellNumber"
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_cellNumber"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número
        do Contato</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_address" id="floating_address"
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_address"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Endereço
        do Contato</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-stone-950 bg-transparent border-0 border-b-2 border-fuchsia-500 appearance-none dark:text-stone-950 dark:border-sky-200 dark:focus:border-sky-200 focus:outline-none focus:ring-0 focus:border-sky-200 peer"
        placeholder=" " required />
      <label for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-fuchsia-500 dark:text-fuchsia-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-500 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail
        do Contato</label>
    </div>
    <button @click="addNewContact" type="addNewContact"
      class="text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">Adicionar
      Novo Contato</button>
    <button type="route-home"
      class="text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-200 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-700">
      <router-link to="/">Página Inicial</router-link> </button>
  </form>
</template>
<!---->
<style scoped></style>