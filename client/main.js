const posts = document.getElementById("posts");

async function fetchPosts() {
  let response = await fetch("http://localhost:3001/posts");
  let allPosts = await response.json();
  console.log(allPosts);

  posts.innerText = allPosts.post;
}

fetchPosts();
