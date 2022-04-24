class Hashtag {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(title, numberTweetsRelated, numberTrendingTopics){
    this.title = title
    this.numberTweetsRelated = numberTweetsRelated
    this.numberTrendingTopics = numberTrendingTopics
  }

  getGeneralInfo(){
    return `Hashtag: ${this.title} \nTweets Related: ${this.numberTweetsRelated}\nTrending Topics: ${this.numberTrendingTopics}`
  }
}

// Instanciar un objeto de la clase Hashtag

const myHashtag = new Hashtag("#DiaDelLibro", 5000, 6000)
console.log(myHashtag.getGeneralInfo())