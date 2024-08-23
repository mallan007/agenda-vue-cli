import {http} from "../services/http";
import axios from "axios";

export default class Contacts {
    constructor( 
        public name: string = "",
        public cellNumber: string = "",
        public address: string = "",
        public email: string = "",
        public id: number = 0
    ){}

}   

export async function loadData() {
    let result = await http.get("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts");
    contacts: [] as Contacts[];
    let contacts = result.data;
    return contacts
  }
/* 
  

  async addNewContact() {
      console.log(this.contact);
      if (this.contact.name != '' && this.contact.cellNumber != '' && this.contact.address != '' && this.contact.email != '') {
        const result = await axios.post("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts/", {
          name: this.contact.name,
          cellNumber: this.contact.cellNumber,
          address: this.contact.address,
          email: this.contact.email,
        });
        console.log("Result: " + result);
        if (result.status == 201) {
          alert(`${this.contact.name} foi adicionado com sucesso.`);
          this.$router.push('/');
        } else {
          alert("Erro ao adicionar contato");
        }

      } else {
        alert("Preencha todos os campos");
        return;
      }

    },
  
  export async function updateContact() {
    console.log(this.contact);
    const result = await axios.put("http://localhost:3000/contacts/" + this.$route.params.id, {
      name: this.contact.name,
      cellNumber: this.contact.cellNumber,
      address: this.contact.address,
      email: this.contact.email,
    });
  }
  
  export async function deleteContact(id) {
    let result = await axios.delete("http://localhost:3000/contacts/" + this.$route.params.id);
    console.log(result);
    if (result.status == 200) {
      this.$router.push("/");
    }
    alert(`${this.name} foi excluído com sucesso.`);
  }
  
  
  // GIST: 'https://gist.github.com/mallan007/db8a6168ee7b5cd006e554318a376c7d' 

*/