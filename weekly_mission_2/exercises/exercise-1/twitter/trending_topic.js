const trendingTopic = {
 title: "#DiaDelLibro",
 keywords: ["Libro", "Day", "Día", "Internacional"],
 dateRange: "2022/04/23 - 2022/04/23",
 totalTweets: 64715,
 retweets: 120000,
 numberOfLinks: 300, 
 numberOfImages: 500,
 hashtags: ["#DiaDelLibro", "#libros", "#BuenSabado"],
 country: "México",
 getTotalTweets: function(){
   return this.totalTweets
 },
 getGeneralInfo: function(){
   return `Trending topic: ${this.title} \nHashtags: ${this.hashtags}\nCountry: ${this.country}`
 }
}

console.log(trendingTopic.getGeneralInfo())
console.log("Total tweets: " + trendingTopic.getTotalTweets())