describe("Del functionality", () => {
	// beforeEach(() => {
		
	// 	cy.visit("/");
	// });
	it("Add and item and user should delte the item", () => {
		cy.visit("/");
		let item = "BUY MILK";
		cy.get(".task-input").type(item).type("{enter}");
		cy.get(".del-item").click();
		cy.get(".task-list").not("contain", item);
	});

	it("Load 5 datas in the list intially and user should be able to remove the item",()=>{
        cy.server()
        cy.route("/api/task","fixture:tasks")
		cy.visit("/")
		cy.get('#1').click();
	   cy.get(".task-list li").should("have.length",4)
	})
	
	
});
