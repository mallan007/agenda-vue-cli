import type Contact from "../interfaces/Contact";   
import axios from "axios";

export async function getDataURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getContacts() {
  return getDataURL<Contact[]>('https://gist.github.com/mallan007/db8a6168ee7b5cd006e554318a376c7d');
}

export async function loadData() {
  let result = await axios.get("https://gist.github.com/mallan007/db8a6168ee7b5cd006e554318a376c7d");
  let contacts = result.data;
}

// GIST LINK: https://gist.github.com/mallan007/db8a6168ee7b5cd006e554318a376c7d ainda não foi usado, 
//apenas o database agenda.json que está sendo watched pelo json-server no package.json