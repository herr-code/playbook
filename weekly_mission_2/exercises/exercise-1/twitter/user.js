const user = {
 user: "carlo",
 username: "carlogilmar",
 bio: "Code at @erlangsolutions. drawing at @visual_partner.",
 dateOfBirth: "1996-04-02",
 email: "carlo@gmail.com", 
 phoneNumber: "1234567890",
 age: 25,
 getPhoneNumber: function(){
   return this.phoneNumber
 },
 getGeneralInfo: function(){
   return `User: ${this.user} \nUsername: ${this.username}\nAge: ${this.age}`
 }
}

console.log(user.getGeneralInfo())
console.log("Phone Number: " + user.phoneNumber)