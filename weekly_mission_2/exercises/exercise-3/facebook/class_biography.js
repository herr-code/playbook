class Biography {
  // El constructor nos permite instanciar un objeto y asignarle atributos, 
  //this nos ayuda a realizar esto.
  constructor(user, username, description, posts, photoProfile, bannerURL, videos, photos, events, opinions, info){
    this.user = user
    this.username = username
    this.description = description
    this.posts = posts
    this.photoProfile = photoProfile
    this.bannerURL = bannerURL
    this.videos = videos
    this.photos = photos
    this.events = events
    this.opinions = opinions
    this.info = info
  }

  getPhotoProfile(){
    return this.photoProfile
  }
  
  getGeneralInfo(){
    return `User: ${this.user} \nUsername: ${this.username}\nLinks: ${this.info.linkTree}\nInfo: ${this.info.description}`
  }
}

// Instanciar un objeto de la clase Biography

const myBiography = new Biography("carlo", "carlogilmar", "Blogero", [1,2,3,4], 
  "https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.6435-9/184750212_102146275393211_4732907710183698770_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tNRgl4Ny7-sAX9Paz-M&_nc_ht=scontent.fpbc2-1.fna&oh=00_AT_U47GsbLeqMMelL1Rv3IlOIGBoICc-q-ydZXDQgK7vvw&oe=628BE76A",
  "https://scontent.fpbc2-2.fna.fbcdn.net/v/t1.6435-9/184919423_102146115393227_8285926736874752442_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=V3jKJFNvxvoAX_O37SY&_nc_ht=scontent.fpbc2-2.fna&oh=00_AT9hCuCy9wpnYSyIsPF0GgO6Gz6YO6nOnreJIXJ75kx2OQ&oe=62880DA9",
  [], [], [], [], { description: "¡Hola a tod@s! Si quieres aprender programación y las buenas prácticas en CSS, HTML y JS, esta es tu página.", linkTree: ["https://twitter.com/DorianDesings", "https://www.instagram.com/dorian_desings/"], education: ["UNAM"]})
console.log(myBiography.getGeneralInfo())