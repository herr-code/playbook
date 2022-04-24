class Travel {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(user, driver, driverStars, travelTime, travelDestination, travelOrigin, payMethod, cost){
    this.user = user
    this.driver = driver
    this.driverStars = driverStars
    this.travelTime = travelTime
    this.travelDestination = travelDestination
    this.travelOrigin = travelOrigin
    this.payMethod = payMethod
    this.cost = cost
  }

  getCost(){
    return this.cost
  }

  getGeneralInfo(){
    return `User: ${this.user} \nDestination: ${this.travelDestination} \nOrigin: ${this.travelOrigin}`
  }
}

// Instanciar un objeto de la clase Travel

const myTravel = new Travel("Andrea", "carlo", 5, "3 horas", "Ciudad de México", "Tlaxcala", "Paypal", 2000)
console.log(myTravel.getGeneralInfo())