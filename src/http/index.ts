import type IContact from "../interfaces/IContact";   
import axios from "axios";

export async function getDataURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getContacts() {
  return getDataURL<IContact[]>('https://gist.github.com/mallan007/db8a6168ee7b5cd006e554318a376c7d');
}

export async function loadData() {
  let result = await axios.get("https://gist.github.com/mallan007/db8a6168ee7b5cd006e554318a376c7d");
  let contacts = result.data;
}

