const travel = {
 user: "Andrea",
 driver: "carlo",
 driverStars: 5,
 travelTime: "3 horas",
 travelDestination: "Ciudad de México",
 travelOrigin: "Tlaxcala", 
 payMethod: "Paypal",
 cost: 2000, 
 getCost: function(){
   return this.cost
 },
 getGeneralInfo: function(){
   return `User: ${this.user} \nDestination: ${this.travelDestination} \nOrigin: ${this.travelOrigin}`
 }
}

console.log(travel.getGeneralInfo())
console.log("Travels Cost: $" + travel.getCost())