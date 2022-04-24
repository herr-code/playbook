class User {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(user, username, description, dateOfBirth, email, phoneNumber, password, status, followers, numberOfFriends){
    this.user = user
    this.username = username
    this.description = description
    this.dateOfBirth = dateOfBirth
    this.email = email
    this.phoneNumber = phoneNumber
    this.password = password
    this.status = status
    this.followers = followers
    this.numberOfFriends = numberOfFriends
  }

  getNumberOfFriends(){
    return this.numberOfFriends
  }

  getGeneralInfo(){
    return `User: ${this.user} \nUsername: ${this.username}\nStatus: ${this.status}`
  }
}

// Instanciar un objeto de la clase user

const myUser = new User("carlo", "carlogilmar", "Code at @erlangsolutions. drawing at @visual_partner.", "1996-04-02", "carlo@gmail.com", "1234567890", "$2y$11$q5MkhSBtlsJcNEVsYh64a.aCluzHnGog7TQAKVmQwO9C8xb.t89F.",
  "active", 1091, 2000)
console.log(myUser.getGeneralInfo())