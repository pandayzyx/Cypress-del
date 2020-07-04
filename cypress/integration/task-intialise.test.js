describe("Load data when appliaction mounts",()=>{
    it.only("Load 5 datas in the list intially",()=>{
        cy.server()
        cy.route("/api/task","fixture:tasks")
        cy.visit("/")
       //cy.get(".task-list li").should("have.length",5)
    })
})