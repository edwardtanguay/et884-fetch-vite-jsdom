import axios from 'axios';

const employeesUrl = 'https://edwardtanguay.vercel.app/share/employees.json';
const customersUrl = 'https://edwardtanguay.vercel.app/share/customers.json';

const appData = {
	version: '1.2',
	employees: (await axios.get(employeesUrl)).data,
	customers: (await axios.get(customersUrl)).data
};
document.appData = appData;