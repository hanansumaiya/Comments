function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
}
loadComments();
function displayComments(data) {
  const section = document.getElementById("comments");
  for (const detail of data) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `<h3>${detail.id}</h3>
    <h3>Name: ${detail.name}</h3>
    <h4>${detail.email}</h4>
    <p>${detail.body}</p>`;
    section.appendChild(div);
  }
}
