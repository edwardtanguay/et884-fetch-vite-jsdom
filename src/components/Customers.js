export const Customers = ({version, customers}) => {
	return /*html*/ `
		<h2>Customers - Version ${version}</h2>
  		<p>There are ${customers.length} customers.</p>
	`;
}