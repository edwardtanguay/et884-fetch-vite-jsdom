export const Customers = (appData) => {
	return /*html*/ `
		<h2>Customers</h2>
  		<p>There are ${appData.customers.length} customers.</p>
	`;
}