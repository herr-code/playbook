class Profile {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(name, stars, numberTravels, email, phoneNumber){
    this.name = name
    this.stars = stars
    this.numberTravels = numberTravels
    this.email = email
    this.phoneNumber = phoneNumber
	}

	geNumberTravels(){
    return this.numberTravels
  }
 
  getGeneralInfo(){
    return `Profile Name: ${this.name} \nStars: ${this.stars}`
  }
}

// Instanciar un objeto de la clase Profile

const myProfile = new Profile("carlo", 5, 10, "carlo@gmail.com", "1234567890")
console.log(myProfile.getGeneralInfo())