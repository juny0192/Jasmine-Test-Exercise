it("should calculate the monthly rate correctly", function () {
	expect(
		calculateMonthlyPayment({ amount: 600000, years: 30, rate: 3 }),
	).toEqual("2529.62");
	expect(
		calculateMonthlyPayment({ amount: 400000, years: 20, rate: 3.5 }),
	).toEqual("2319.84");
});

it("should return a result with 2 decimal places", function () {
	expect(twoDecimal(34.95677)).toEqual("34.96");
	expect(twoDecimal(2845.425349)).toEqual("2845.43");
});
