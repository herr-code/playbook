class Issue {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status = status
    this.numberOfComments = numberOfComments
    this.labels = labels
    this.author = author
    this.dateCreated = dateCreated
    this.lastUpdated = lastUpdated
  }

  getTitleAndAuthor(){
    return `This issue: ${this.title} was created by: ${this.author}`
  }

  getGeneralInfo(){
    return `This issue: ${this.title} is ${this.status} and was created on: ${this.dateCreated}`
  }
}

// Instanciar un objeto de la clase Issue

const myIssue = new Issue("02 Live 2 Semana 1", "MissionNodeJS", "open", 115, ["FINALIZADO", "LIVE 2", "Semana-1"], "carlogilmar", "2022-04-02 20:00:00", "2022-04-23 22:00:00")
console.log(myIssue.getGeneralInfo())

