import './style.css'
import axios from 'axios';
import { Employees } from './components/Employees';
import { Customers } from './components/Customers';

const employeesUrl = 'https://edwardtanguay.vercel.app/share/employees.json';
const customersUrl = 'https://edwardtanguay.vercel.app/share/customers.json';

const employees = (await axios.get(employeesUrl)).data;
const customers = (await axios.get(customersUrl)).data;

document.querySelector('#app').innerHTML = `
  <h1>Axios example</h1>
  ${Employees(employees)}
  ${Customers(customers)}
`