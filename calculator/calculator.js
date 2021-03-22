window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupInitialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
	const defaultVal = { amount: 600000, years: 30, rate: 3 };

	const amountUI = document.getElementById("loan-amount");
	amountUI.value = defaultVal.amount;

	const yearsUI = document.getElementById("loan-years");
	yearsUI.value = defaultVal.years;

	const rateUI = document.getElementById("loan-rate");
	rateUI.value = defaultVal.rate;

	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const currentValue = getCurrentUIValues();
	const currentMonthlyP = calculateMonthlyPayment(currentValue);
	updateMonthly(currentMonthlyP);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let outPut = "";
	let p = values["amount"];
	let i = values["rate"] / 100 / 12;
	let n = values["years"] * 12;

	let result = (p * i) / (1 - (1 + i) ** -n);
	return (outPut = (Math.round(result * 100) / 100).toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	let monthlyPayUI = document.getElementById("monthly-payment");
	monthlyPayUI.innerText = "$" + monthly;
}

function twoDecimal(num) {
	return (Math.round(num * 100) / 100).toFixed(2);
}
