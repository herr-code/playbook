const post = {
 id: 1, 	
 user: "Dorian Desings",
 description: "Ya disponible la siguiente batalla de CSS",
 created: "2022-02-13",
 links: ["https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkYrqoBVl5SI%26list%3DPLROIqh_5RZeAYc9-3D2odVDWsZCrksKYT%26index%3D7&h=AT1qPBAf_xDTyITxLV7rZOsso9ipBcKjU78Fh8mnJ9D0KvcJLs6Nwq71EL5ls1SKBfcFq6GMuuKDkeN1bRRfB0qawjtt5hvbjwXkABIp7Kr-XdnvfTIboKtzGfkbY7z46Gukihc-DRRylklGvOU&__tn__=%2CmH-R&c[0]=AT1ItfOPMGDa4F3uAUNl6V44vAnHcdWcomRt_RxDzorVLlRiHTamrrYPoBMC2PAzk0KeFaIJjPOnswRfKxgHlgKQLuWIA76EE8adAziX3ml_4yhZ-e8MCNVLDft1gg8aJVv40RYa0ectCf7Y4A_T9S4ZrHrXEnJXr1vw4z3T_a-JtwyuyjPKYZmyQEnyfIy7HBe4"],
 comments: 1,
 share: 2,
 numberOfLikes: 16,
 getNumberOfLikes: function(){
   return this.numberOfLikes
 },
 getGeneralInfo: function(){
   return `User: ${this.user} \nDescription: ${this.description}\nLinks: ${this.links}`
 }
}

console.log(post.getGeneralInfo())
console.log("Likes: " + post.getNumberOfLikes())