import './style.css'
import axios from 'axios';
import { Employees } from './components/Employees';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

const employees = (await axios.get(url)).data;

document.querySelector('#app').innerHTML = `
  <h1>Axios example</h1>
  ${Employees(employees)}
`