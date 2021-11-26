/*const faker = require ("faker")

function createRandomClientPayload(){
    const fakeName = faker.name.firstName()
    const fakeEmail = faker.internet.email()
    const fakePhone = faker.phone.phoneNumber()

    const payload = {
        "name": fakeName,
        "email": fakeEmail,
        "telephone": fakePhone
    }

    return payload
    
}*/ 
const payload = {
    "name": "gabee",
    "email": "barse@mail.com",
    "telephone": "070001111111"
}
const putReq ={
    "name": "gabriel",
    "email": "barssoo@mail.com",
    "telephone": "9990001111111",
    "id": 3,
}

function getRequestAllClients(){
    cy.authenticateSession().then((response =>{
        cy.request({
            method:"GET",
            url:"http://localhost:3000/api/clients",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json"
            },
        }).then((response=>{
            cy.log(response.body)
            //const responseToString = JSON.stringify(response)
            //expect(responseToString).to.have.string(payload.name)
            
        }))
    }))
}
function createClientRequest(cy){
    cy.authenticateSession().then((response =>{
        
        cy.request({
            method:"POST",
            url:"http://localhost:3000/api/client/new",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
            body:payload 
        }).then((response=>{
          //cy.log(JSON.stringify(response))
          const responseToString = JSON.stringify(response)
          expect(responseToString).to.have.string(payload.name)
          expect(responseToString).to.have.string(payload.email)
          expect(responseToString).to.have.string(payload.telephone)
        }))
    }))
}

function deleteClientRequest(cy){
    cy.authenticateSession().then((response =>{
        
        //let lastId = response.body
        //cy.log(lastId)
        cy.request({
            method:"POST",
            url:"http://localhost:3000/api/client/new",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
            body:payload 
        }).then((response=>{
          cy.log(JSON.stringify(response))
          
        }))
          cy.request({
              method:"DELETE",
              url:"http://localhost:3000/api/client/3",
              headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
          }).then((response=>{
            const responseToString = JSON.stringify(response.body)
            cy.log(responseToString)
            
          
        }))
    }))
}
//it ("Create a new client", function(){
   
    
//})

function putRequest(cy){
cy.authenticateSession().then((response =>{

    cy.request({
        method:"POST",
        url:"http://localhost:3000/api/client/new",
        headers:{
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "content-type": "application/json",
        },
        body:payload 
    }).then((response=>{
      cy.log(JSON.stringify(response))
      //const responseToString = JSON.stringify(response)
      //expect(responseToString).to.have.string(payload.name)
      //expect(responseToString).to.have.string(payload.email)
      //expect(responseToString).to.have.string(payload.telephone)
    }))

    cy.request({
        method:"PUT",
        url:"http://localhost:3000/api/client/3",
        headers:{
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "content-type": "application/json",
        },
        body:putReq 
    }).then((response=>{
        const responseToString = JSON.stringify(response.body)
        cy.log(responseToString)
      
    }))
    cy.request({
        method:"DELETE",
        url:"http://localhost:3000/api/client/3",
        headers:{
          "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
          "content-type": "application/json",
      },
    }).then((response=>{
      const responseToString = JSON.stringify(response.body)
      cy.log(responseToString)
      
    
  }))
}))
}

module.exports = {
   // createRandomClientPayload,
   getRequestAllClients,
    createClientRequest,
    deleteClientRequest,
    putRequest
}