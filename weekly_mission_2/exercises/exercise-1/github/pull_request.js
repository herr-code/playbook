const pullRequest = {
 title: "Mi primera contribucion en github",
 branchName: "main",
 dateCreated: "2022-04-22 20:00:00",
 status: "open",
 repositoryNameAssociated: "launch-x-explorers",
 author: "Carlos7T",
 getStatus: function(){
   return this.status
 },
 getTitleAndAutor: function(){
   return `This Pull Request: ${this.title} was created by ${this.author}`
 }
}

console.log("Pull Request: " + pullRequest.title)
console.log("Status: " + pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())