const payload = {
    "features":["ensuite","sea_view"],
    "category":"single",
    "number":"100",
    "floor":"34",
    "price":"3699",
    "available":true,
   //"id": 4,
}
const paytwo = {
    "features":["ensuite","sea_view"],
    "category":"double",
    "number":"205",
    "floor":"45",
    "price":"5500",
    "available":true,
    "id": 3,
    //"created": "2021-11-25T02:40:06.264Z"
}

function getRequestAllRooms(){
    cy.authenticateSession().then((response =>{
        cy.request({
            method:"GET",
            url:"http://localhost:3000/api/rooms",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json"
            },
        }).then((response=>{
            cy.log(response.body)
            //const responseToString = JSON.stringify(response)
            //expect(responseToString).to.have.string(payload.number)
            
        }))
    }))
}
function createRoomRequest(cy){
    cy.authenticateSession().then((response =>{
        
        cy.request({
            method:"POST",
            url:"http://localhost:3000/api/room/new",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
            body:payload 
        }).then((response=>{
            cy.log(response.body)
          //const responseToString = JSON.stringify(response)
          //expect(responseToString).to.have.string(payload.number)
        }))
        cy.request({
            method:"DELETE",
            url:"http://localhost:3000/api/room/3",
            headers:{
              "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
              "content-type": "application/json",
          },
        }).then((response=>{
            cy.log(response.body)
          //const responseToString = JSON.stringify(response.body)
          //cy.log(responseToString)
        
      }))
    }))
}

function deleteRoomRequest(cy){
    cy.authenticateSession().then((response =>{
        //let lastId = (response.body[response.body.length-1].id) 

        cy.request({
            method:"POST",
            url:"http://localhost:3000/api/room/new",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
            body:payload 
        }).then((response=>{
            cy.log(response.body)
          //const responseToString = JSON.stringify(response)
          //expect(responseToString).to.have.string(payload.number)
        }))
          cy.request({
              method:"DELETE",
              url:"http://localhost:3000/api/room/3",
              headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
          }).then((response=>{
              cy.log(response.body)
            //const responseToString = JSON.stringify(response.body)
            //cy.log(responseToString)
          
        }))
        
    }))
}
function changeRoomRequest(cy){
    cy.authenticateSession().then((response =>{

        cy.request({
            method:"POST",
            url:"http://localhost:3000/api/room/new",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
            body:payload 
        }).then((response=>{
          
          const responseToString = JSON.stringify(response)
          cy.log(JSON.stringify(responseToString))
          //expect(responseToString).to.have.string(payload.number)
          //expect(responseToString).to.have.string(payload.email)
          //expect(responseToString).to.have.string(payload.telephone)
        }))
    
        cy.request({
            method:"PUT",
            url:"http://localhost:3000/api/room/3",
            headers:{
                "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                "content-type": "application/json",
            },
            body:paytwo 
        }).then((response=>{
            const responseToString = JSON.stringify(response.body)
            cy.log(responseToString)
          
        }))
        cy.request({
            method:"DELETE",
            url:"http://localhost:3000/api/room/3",
            headers:{
              "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
              "content-type": "application/json",
          },
        }).then((response=>{
          //  cy.log(response.body)
          const responseToString = JSON.stringify(response.body)
          cy.log(responseToString)
        
      }))
    }))
    }

module.exports = {
   getRequestAllRooms,
    createRoomRequest,
    deleteRoomRequest,
    changeRoomRequest
}