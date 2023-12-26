var postApi = "http://localhost:3000/posts";
start();

async function start() {
    renderPosts(await getPosts());
    // console.log(await getPosts());
}

function createPost(data) {
    fetch(postApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then(async (data) => {
            addPostHTML(data);
        });
}

async function getPosts() {
    var posts = await fetch("http://localhost:8080/posts", {
        mode: "no-cors"
    })
        .then((res) => res.json())
        .then((data) => data);
    return posts;
}

async function deletePost(postId) {
    const response = await fetch(postApi + "/" + postId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    response.json().then((data) => {
        removePostHTML(postId);
    });
}

function renderPosts(posts) {
    var listPosts = document.querySelector("#list-posts");
    console.log(posts);
    var htmls = posts.map(
        (post) => `<li id="post-${post.id}">
		<h2>${post.title}</h2>
		<p>${post.author}<p>
        <button onclick="deletePost(${post.id})" id="delete-post-button">Delete</button>
	</li>`
    );
    listPosts.innerHTML = htmls.join("");
}

function addPostHTML(post) {
    var listPosts = document.querySelector("#list-posts");
    var liTag = document.createElement("li");
    liTag.setAttribute("id", "post-" + post.id);
    var html = `
        <h2>${post.title}</h2>
        <p>${post.author}</p>
        <button onclick="deletePost(${post.id})">Delete</button>
    `;
    liTag.innerHTML = html;
    listPosts.appendChild(liTag);
}

function removePostHTML(postId) {
    var delLiTag = document.querySelector("#post-" + postId);
    delLiTag.remove();
}

function addNewPost() {
    var title = document.querySelector("input[name=title]").value;
    var author = document.querySelector("input[name=author]").value;
    var newPost = {
        title: title,
        author: author
    };
    createPost(newPost);
}
