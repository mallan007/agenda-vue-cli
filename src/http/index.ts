import type Contacts from "../services/Contacts";   
import axios from "axios";

export async function getDataURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getContacts() {
  return getDataURL<Contacts[]>('https://668ec466bf9912d4c92fa7b7.mockapi.io/api/');
}

export async function loadData() {
  let result = await axios.get("https://668ec466bf9912d4c92fa7b7.mockapi.io/api/");
  let contacts = result.data;
}

export async function addNewContact() {
  const result = await axios.post("http://localhost:3000/contacts", {
    name: this.contact.name,
    cellNumber: this.contact.cellNumber,
    address: this.contact.address,
    email: this.contact.email
  });
  console.log(result);
}

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
    this.loadData();
    this.$router.push("/");
  }
  alert(`${this.name} foi excluído com sucesso.`);
}


// GIST: 'https://gist.github.com/mallan007/db8a6168ee7b5cd006e554318a376c7d'