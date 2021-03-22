it("should make new td from value and append to tr with appendTd(tr, value)", function () {
	let newTd = document.createElement("td");
	appendTd(newTd, "testValue");

	expect(newTd.firstChild.innerHTML).toEqual("testValue");
});
