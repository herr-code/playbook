class Post {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(id, user, description, created, links, comments, share, numberOfLikes){
    this.id = id
    this.user = user
    this.description = description
    this.created = created
    this.links = links
    this.comments = comments
    this.share = share
    this.numberOfLikes = numberOfLikes
	}

	getNumberOfLikes(){
    return this.numberOfLikes
  }

  getGeneralInfo(){
    return `User: ${this.user} \nDescription: ${this.description}\nLinks: ${this.links}`
  }
}

// Instanciar un objeto de la clase Post

const myPost = new Post(1, "carlo", "Ya disponible la siguiente batalla de CSS", "2022-02-13", "https://carlogilmar.xyz/", 
  1, 2, 16)
console.log(myPost.getGeneralInfo())