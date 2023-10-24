export const Employees = (appData) => {
	appData.version = '1.3';
	return /*html*/ `
		<h2>Employees - Version ${appData.version}</h2>
  		<p>There are ${appData.employees.length} employees.</p>

	`;
};