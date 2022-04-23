class PullRequest {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(title, branchName, dateCreated, status, repositoryNameAssociated, author){
    this.title = title
    this.branchName = branchName
    this.dateCreated = dateCreated
    this.status = status
    this.repositoryNameAssociated = repositoryNameAssociated
    this.author = author

	}

	getStatus(){
    return this.status
  }

  getTitleAndAutor(){
    return `This Pull Request: ${this.title} was created by ${this.author}`
  }
}

// Instanciar un objeto de la clase PullRequest

const myPR = new PullRequest("Mi primera contribucion en github", "main", "2022-04-22 20:00:00", "open", "launch-x-explorers", "Carlos7T")
console.log(myPR.getTitleAndAutor())