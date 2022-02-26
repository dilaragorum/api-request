console.log('Sayfa açılılır açılmaz yükleniyor, burada istek atabilirsin.')

getPostsUsingFetch()

function getPostsUsingXMLHttpRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText)
            createPostsElement(posts)
        }
    }
    xhttp.send();
}

async function getPostsUsingFetch() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()
    createPostsElement(posts)
}

function createPostsElement(posts) {
    let container = document.getElementById('posts-container')
            
    for (let i = 0; i < posts.length; i++) {
        let postunBasligi = `${i+1} - ${posts[i].title}`
        container.appendChild(document.createTextNode(postunBasligi))
        container.append(document.createElement('br'))
    }
}