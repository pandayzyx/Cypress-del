describe("Del functionality", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it.only("Add and item and user should delte the item", () => {
		let item = "BUY MILK";
		cy.get(".task-input").type(item).type("{enter}");
		cy.get(".del-item").click();
		cy.get(".task-list").not("contain", item);
	});
});
