const profile = {
 name: "carlo",
 stars: 5,
 numberTravels: 10,
 email: "carlo@gmail.com", 
 phoneNumber: "1234567890",
 geNumberTravels: function(){
   return this.numberTravels
 },
 getGeneralInfo: function(){
   return `Profile Name: ${this.name} \nStars: ${this.stars}`
 }
}

console.log(profile.getGeneralInfo())
console.log("Travels Number: " + profile.geNumberTravels())