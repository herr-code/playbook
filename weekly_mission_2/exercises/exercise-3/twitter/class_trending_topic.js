class TrendingTopic {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(title, keywords, dateRange, totalTweets, retweets, numberOfLinks, numberOfImages, hashtags, country){
    this.title = title
    this.keywords = keywords
    this.dateRange = dateRange
    this.totalTweets = totalTweets
    this.retweets = retweets
    this.numberOfLinks = numberOfLinks
    this.numberOfImages = numberOfImages
    this.hashtags = hashtags
    this.country = country
  }

  getTotalTweets(){
    return this.totalTweets
  }

  getGeneralInfo(){
    return `Trending topic: ${this.title} \nHashtags: ${this.hashtags}\nCountry: ${this.country}`
  }
}

// Instanciar un objeto de la clase TrendingTopic

const myTT = new TrendingTopic("#DiaDelLibro", ["Libro", "Day", "Día", "Internacional"],
  "2022/04/23 - 2022/04/23", 64715, 120000, 300, 500, ["#DiaDelLibro", "#libros", "#BuenSabado"], "México")
console.log(myTT.getGeneralInfo())