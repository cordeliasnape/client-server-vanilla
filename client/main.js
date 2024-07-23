const posts = document.getElementById("posts");

async function fetchPosts() {
  let response = await fetch("https://server-vanilla.onrender.com/posts");
  let allPosts = await response.json();
  console.log(allPosts);

  posts.innerText = allPosts.post;
}

fetchPosts();
