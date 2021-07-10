import Instafeed from "instafeed.js"
import keys from "./keys"

export default function getInstagramPosts() {
  return fetch(keys.instaAdress, {
    headers: {
      "Content-Type": "application/javascript",
    },
  })
    .then((resp) => {
      return resp.json()
    })
    .then(() => {
      var feed = new Instafeed({
        get: "tagged",
        accessToken: keys.instaToken,
        limit: 6,
        template: `
              <div class="insta-post">
              <a href="{{link}}" class="insta-post__link">
                <img src="insta.png" alt="" class="insta-post__icon"/>
                <img src="{{image}}" class="insta-post__image" alt="swagAir" >
                <p class="insta-post__text">{{caption}}</p>
                </a>
              </div>
           
        `,
      })
      console.log(feed)
      feed.run()
    })
}
