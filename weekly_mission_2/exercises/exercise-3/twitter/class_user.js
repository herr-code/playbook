class User {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(user, username, bio, dateOfBirth, email, phoneNumber, age){
    this.user = user
    this.username = username
    this.bio = bio
    this.dateOfBirth = dateOfBirth
    this.email = email
    this.phoneNumber = phoneNumber
    this.age = age
  }

  getPhoneNumber(){
    return this.phoneNumber
  }
  
  getGeneralInfo(){
    return `User: ${this.user} \nUsername: ${this.username}\nAge: ${this.age}`
  }
}

// Instanciar un objeto de la clase user

const myUser = new User("carlo", "carlogilmar", "Code at @erlangsolutions. drawing at @visual_partner.", "1996-04-02", "carlo@gmail.com", "1234567890", 26)
console.log(myUser.getGeneralInfo())