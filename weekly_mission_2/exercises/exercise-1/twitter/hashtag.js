const hashtag = {
 title: "#DiaDelLibro",
 numberTweetsRelated: 5000,
 numberTrendingTopics: 5000,
 getGeneralInfo: function(){
   return `Hashtag: ${this.title} \nTweets Related: ${this.numberTweetsRelated}\nTrending Topics: ${this.numberTrendingTopics}`
 }
}

console.log(hashtag.getGeneralInfo())