window.addEventListener("DOMContentLoaded", () => {
	function getResult() {
		const amount = +document.querySelector(".amount").value;
		const first = document.querySelector('[name="currency1"]').value;
		const second = document.querySelector('[name="currency2"]').value;
		let paragraph = document.querySelector(".rate");

		fetch(`https://v6.exchangerate-api.com/v6/a68599c557706b266d3635f6/latest/${first}`, {
			method: "GET"
		})
		.then(response => response.json())
		.then(response => {
			let result = amount * response.conversion_rates[second];
			if (amount != 0) {
				document.querySelector(".result span").textContent = result.toFixed(2);

				
				paragraph.textContent = `Exchange rate of ${first}/${second} equals: ${response.conversion_rates[second]}`;
			} else {
				document.querySelector(".result span").textContent = "---";
				paragraph.textContent = ``;

			}
		})
	} 

	// <p class="rate">Exchange rate equals: ---</p>

	document.querySelector(".amount").addEventListener("input", getResult)
	document.querySelectorAll('select').forEach((e) => {
		e.addEventListener("change", getResult);
	})
	
})

