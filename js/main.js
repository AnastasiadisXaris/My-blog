const posts = [
    { title: "Το πρώτο μου άρθρο", file: "posts/post1.md"},
    { title: "Δεύτερο άρθρο", file: "posts/post2.md"},
];

const postsList = document.getElementById("posts-list");

posts.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
postsList.appendChild(li);
});