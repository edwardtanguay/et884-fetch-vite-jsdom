import './style.css'
import axios from 'axios';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

const response = await axios.get(url);
const employees = await response.data;

document.querySelector('#app').innerHTML = `
  <h1>Axios example</h1>
  <p>There are ${employees.length} employees.</p>
`