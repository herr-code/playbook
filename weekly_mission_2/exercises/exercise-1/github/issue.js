const issue = {
 title: "02 Live 2 Semana 1 [Miércoles 6 de Abril]",
 repositoryNameAssociated: "MissionNodeJS",
 status: "open",
 numberOfComments: 115,
 labels: ["FINALIZADO", "LIVE 2", "Semana-1"],
 author: "carlogilmar",
 dateCreated: "2022-04-02 20:00:00",
 lastUpdated: "2022-04-23 22:00:00",
 getTitleAndAuthor: function(){
   return `This issue: ${this.title} was created by: ${this.author}`
 },
 getGeneralInfo: function(){
   return `This issue: ${this.title} is ${this.status} and was created on: ${this.dateCreated}`
 }
}

console.log("Issue´s name: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())