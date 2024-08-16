import axios from 'axios';
//fazer import de IContact para usar no loadData

async function loadData() {
  const result = await axios.get("http://localhost:3000/contacts");
  this.contacts = result.data;
  this.name = result.data.name;
  this.cellNumber = result.data.cellNumber;
  this.address = result.data.address;
  this.email = result.data.email;
  console.log(result.data);
}

export default loadData; 
// DetailsPage e UpdatePage puxam do loadData através do método 'mounted' 