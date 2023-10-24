import './style.css'
import './appContext.js';
import { Employees } from './components/Employees';
import { Customers } from './components/Customers';

document.querySelector('#app').innerHTML = `
  <h1>Axios example</h1>
  ${Employees()}
  ${Customers()}
`