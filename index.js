const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postContainer = document.getElementById("post-container")

posts.forEach(post => {

  const postContent =
  `<div class="user-info">
  <img class="avatar "src="${post.avatar}">
  <div class="user-details">
  <p class="bold-text">${post.name}</p>
  <p>${post.location}</p>
  </div>
  </div>
  <img class="post-img" src="${post.post}" alt="">
  <div class="icons">
  <img class="icon-img click" src="images/icon-heart.png"><img class="icon-img" src="images/icon-comment.png"><img class="icon-img" src="images/icon-dm.png">
  </div>
  <p class="bold-text text"><span id="likes">${post.likes}</span> likes</p>
  <p class="text"><span class="bold-text">${post.username}</span> ${post.comment}</p>`

  postContainer.insertAdjacentHTML('afterbegin', postContent)

  const postEl = postContainer.querySelector(".post-img")
  const heartEl = postContainer.querySelector(".click")
  const likesEl = postContainer.querySelector("#likes")

  postEl.addEventListener("dblclick", (event) => {
    addLikesToPost(post.likes, likesEl)
  })

  heartEl.addEventListener("click", (event) => {
    addLikesToPost(post.likes, likesEl)
  })
})




function addLikesToPost(likes, likesEl) {

  likes++
  likesEl.textContent = likes

}
