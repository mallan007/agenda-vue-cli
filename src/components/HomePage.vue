<script lang="ts">
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
      const result = await axios.get("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts");
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
  <div class="max-w-md mx-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <div flex items-center gap-2 class="mx-auto w-full text-center inline-flex items-center bg-transparent">
        <button class="relative inline-flex w-full items-center justify-center overflow-hidden text-sm font-medium text-gray-900 
          rounded-lg group bg-gradient-to-br from-fuchsia-500 to-pink-500 group-hover:from-fuchsia-500 group-hover:to-pink-500 hover:text-white 
          dark:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:focus:ring-fuchsia-800">
          <svg class="w-6 h-6 text-white-950 dark:text-white-950" shadow-md sm:rounded-lg px-2.5 py-2.5
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
              clip-rule="evenodd" />
          </svg>
          <router-link to="/add" class="btn-add-link">
            Adicionar Novo Contato
          </router-link>
        </button>
      </div>
      <thead
        class="text-xs text-fuscia-200 dark:text-fuchsia-200 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th>
            Lista de Contatos
          </th>
        </tr>
      </thead>
      <tbody v-for="contact in contacts" :key="contact.id">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td scope="row" class="px-6 py-4 font-medium text-fuchsia-600 dark:text-fuchsia-500 hover:underline ">
            <div class="flex items-center gap-2">
              <span
                class="inline-flex items-center px-2.5 py-2.5 text-sm text-gray-900 border border-fuchsia-500 rounded-full">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              <router-link :to="'/details/' + contact.id">
                {{ contact.name }} </router-link>
            </div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>
<!---->
<style scoped></style>