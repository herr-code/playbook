const user = {
 user: "Dorian Desings",
 username: "yoaprendocondorian ",
 description: "Blogero",
 dateOfBirth: "1990-04-02",
 email: "dorian@gmail.com", 
 phoneNumber: "1234567890",
 password: "$2y$11$q5MkhSBtlsJcNEVsYh64a.aCluzHnGog7TQAKVmQwO9C8xb.t89F.",
 status: "active",
 followers: 1091,
 numberOfFriends: 2000,
 getNumberOfFriends: function(){
   return this.numberOfFriends
 },
 getGeneralInfo: function(){
   return `User: ${this.user} \nUsername: ${this.username}\nStatus: ${this.status}`
 }
}

console.log(user.getGeneralInfo())
console.log("Friends: " + user.getNumberOfFriends())