var hotel = { 
    name: 'Quay', 
    rooms: 40, 
    booked: 25, 
    checkAvailability: function(){ 
        return this.room - this.booked; 
    }
}; 

var elName = document.getElementById('hotelName'); 
elName.textContent = hotel.name; 

var elRooms = document.getElementById('rooms'); 
elRooms.textContent = hotel.checkAvailability(); 




/*
const client = require('rest-client'); 

let serviceProviderAPI = new Client('https://serviceProviders.com); 

serviceProviderAPI.get{{
}}





let object A = { 
name 

}