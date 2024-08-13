<script lang="ts">
import { defineComponent } from "vue";
import IContact from "@/interfaces/IContact";
import { getContacts } from "@/http";
import axios from "axios";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      contacts: [] as IContact [],
    };
  },
  methods: {

  },
    async created() {
      const contacts = await getContacts();

      this.contacts = contacts;
    },

  })
</script>


<template>
  <div id="btn-add-link">
    <router-link to="/add">
      <h2>Adicionar novo contato</h2>
    </router-link>
  </div>
  <div class="main-container">
    <div id="contactName-table">
      <h1>Lista de Contatos:</h1>
    </div>
    <div id="contactName-header">
      <div id="contactName-table-rows">
        <div class="contactName-table-row" v-for="contact in contacts" :key="contact.id">
          <div class="contactName-table-cell">
            {{ contact.name }}
            <router-link :to="'/details/' + contact.id">
              <button class="btn-details">
                Exibir Detalhes
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
.home {
  padding: 2rem;
}
</style>