import axios from "axios";
import Contacts from "../services/Contacts";


const api = axios.create ({
        baseURL: "https://668ec466bf9912d4c92fa7b7.mockapi.io/api/",
    })
    
    export default api;

async function addNewContact() {
    if (this.contact.name != '' && this.contact.cellNumber != '' && this.contact.address != '' && this.contact.email != '') {
      console.log(this.contact);
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
      }else {
        alert("Erro ao adicionar contato");
        return;
      }
    } else {
      alert("Preencha todos os campos");
      return;
    }
    
  }

  async function getContacts() {
    const result = await axios.get("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts");
    this.contacts = result.data;
    this.name = result.data.name;
    this.cellNumber = result.data.cellNumber;
    this.address = result.data.address;
    this.email = result.data.email;
    console.log(result.data);
  } 

  async function getContactById() {
    const result = await axios.get("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts/" + this.$route.params.id);
    this.contact = result.data;
    console.log(result.data);
  } 

  async function updateContact() {
    // Pegar Regex de email e número de telefone
    const result = await axios.put("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts/" + this.$route.params.id, {
      name: this.contact.name,
      cellNumber: this.contact.cellNumber,
      address: this.contact.address,
      email: this.contact.email,    
    }); 
    console.log("Result: " + result);
    if (result.status == 200) {
      alert('Contato atualizado com sucesso');
      this.$router.push('/');
    }
  }

  async function loadData() {
    const result = await axios.get("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts");
    this.contacts = result.data;
    this.name = result.data.name;
    this.cellNumber = result.data.cellNumber;
    this.address = result.data.address;
    this.email = result.data.email;
    console.log(result.data);
  }

  async function loadContact() {
    const result = await axios.get("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts/" + this.$route.params.id);
    this.contact = result.data;
    console.log(result.data);
  }

  async function deleteContact() {
    let result = await api.delete("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts/" + this.$route.params.id);
    console.log("Result: " + result);
    if (result.status == 200) {
      alert(`${this.contact.name} foi excluído com sucesso.`);
      this.$router.push('/');
    } else {
      alert("Erro ao excluir contato");
      return
    }
  }



  /*async function updateContact() {
    
    Criar Arquivo de config RegEx:


    function validEmail(email: string) {
      if (!email) return ''
      return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }
    function validCellNumber(cellNumber: string) {
      if (!cellNumber) return ''
      return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(cellNumber)
    }
    
    if (this.contact.name != '' && validCellNumber(this.contact.cellNumber) != '' 
          && this.contact.address != '' && validEmail(this.contact.email) != '') {
      const result = await api.put("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts/" + this.$route.params.id, {
        name: this.contact.name,
        cellNumber: this.contact.cellNumber,
        address: this.contact.address,
        email: this.contact.email,
      });

      if (result.status == 200) {
        alert('Contato atualizado com sucesso');
        this.$router.push('/');
      }
    }
  }*/
