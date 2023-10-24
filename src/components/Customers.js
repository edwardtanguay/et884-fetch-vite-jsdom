export const Customers = () => {
	return /*html*/ `
		<h2>Customers - Version ${document.appData.version}</h2>
  		<p>There are ${document.appData.customers.length} customers.</p>
	`;
}