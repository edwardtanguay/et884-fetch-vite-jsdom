export const Employees = () => {
	return /*html*/ `
		<h2>Employees - Version ${document.appData.version}</h2>
  		<p>There are ${document.appData.employees.length} employees.</p>

	`;
};