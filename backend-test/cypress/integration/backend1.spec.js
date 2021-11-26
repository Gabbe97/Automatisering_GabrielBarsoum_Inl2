/// <reference types="cypress" />

import * as roomHelpers from "../helpers/room-helpers"
import * as clientHelpers from "../helpers/client-helpers"

describe(`Rooms tests`, function(){

    
    it("Show all Rooms", function(){
        roomHelpers.getRequestAllRooms(cy)
    })

    it ("Create ande delete Room", function(){
        roomHelpers.createRoomRequest(cy)
        //roomHelpers.deleteRoomRequest(cy)
    })
    it ("Create, change and delete Room", function(){
        roomHelpers.changeRoomRequest(cy)
    })
    it ("Show Clients", function(){
        clientHelpers.deleteClientRequest(cy)
    })
    it ("Create and delete Client", function(){
        clientHelpers.getRequestAllClients(cy)
    })
})