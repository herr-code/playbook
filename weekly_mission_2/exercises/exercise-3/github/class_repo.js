class Repo {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
    this.name = name
    this.author = author
    this.language = language
    this.numberOfCommits = numberOfCommits
    this.stars = stars
    this.forks = forks
    this.issues_open = issues_open
    this.issues_close = issues_close
  }

  getTotalIssues(){
    return this.issues_open + this.issues_close
  }

  getGeneralInfo(){
   return `This repository ${this.name} was created by ${this.author} has ${this.stars} stars`
  }
}

// Instanciar un objeto de la clase repo

const myRepo = new Repo("LaunchX", "carlogilmar", "js", 100, 500, 299, 10, 15)
console.log(myRepo.getGeneralInfo())

