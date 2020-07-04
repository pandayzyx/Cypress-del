describe("Form Submit",()=>{
    beforeEach(()=>{
        cy.visit("/")
    })

    it.only("Sumbit the form and one elemnt should be added",()=>{
        const item  = "Buy Milk"
        cy.server()
        cy.route("POST","/api/task",{
            title: item,
            id:1,
            completed:false
        })

        
      cy.get(".task-input").type(item)
      cy.get(".btn").click()
      cy.get(".task-list > li").not("contain",item)

    })
    it("Onsubmit handle error ",()=>{
        const item  = "Buy Milk"

        cy.server()
        cy.route({
            status:500,
            method:"POST",
            url:"/task/api",
            response:{}
        })

        cy.get(".task-input").type(item).type("{enter}")
        cy.get(".error").should("be.empty")
    })
})