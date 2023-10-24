import './style.css'
import axios from 'axios';

const employees = (await axios.get('https://edwardtanguay.vercel.app/share/employees.json')).data;

document.querySelector('#app').innerHTML = `
  <h1>Axios example</h1>
  <p>There are ${employees.length} employees.</p>
`