import axios from "axios";
import Contacts from "../services/Contacts";

export async function getDataURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getContacts() {
  return getDataURL<Contacts[]>('https://668ec466bf9912d4c92fa7b7.mockapi.io/api/');
}
