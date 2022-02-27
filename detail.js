
getPostUsingFetch();

function getPostUsingXMLHttpRequest() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true)
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            const post = JSON.parse(this.responseText)
            createPostElement(post);
        }
    }
    xhttp.send();
}

async function getPostUsingFetch() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const post = await res.json();
    createPostElement(post);
}

function createPostElement(post) {
    const container = document.getElementById('post-container');
    const titleOfPost = `${post.title}`
    container.appendChild(document.createTextNode(titleOfPost));
}