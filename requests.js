const data = {
    title : 'Yeni bir title',
    body : 'Yeni bir body',
    userId : '1'
};

const patchedData = {
    title : 'foo'
}

async function getData() {
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(requestUrl);

    if(response.status === 200) {
        console.log('Process is successful')
        const jsonResponse = response.json();
        console.log(jsonResponse)
    } else {
        console.log(new Error('Something went wrong'))
        console.error('Data couldnt be transferred.')
    } 
}

patchData(patchedData);

async function postData(data) {
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
    const requestBody = JSON.stringify(data);

    const requestOptions = {
        method : 'POST',
        body : requestBody,
        headers : {
            'Content-type' : 'application/json'
        }
    }

    const response = await fetch(requestUrl, requestOptions);

    if(response.status === 201) {
        console.log('Data is posted')
        const jsonResponse = await response.json();
        createPost(jsonResponse, 'post');
        console.log(jsonResponse)   
    } else {
        console.log(new Error('Something went wrong'))
        console.error('Data couldnt posted.')
    }
}

async function putData(data) {
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const requestBody = JSON.stringify(data);

    const requestOptions = {
        method : 'PUT',
        body : requestBody,
        headers : {
            'Content-type' : 'application/json'
        }
    }

    const response = await fetch(requestUrl, requestOptions);
    
    if(response.status === 200) {
        console.log('Change is saved')
        const jsonResponse = await response.json();
        createPost(jsonResponse, 'put');
        console.log(jsonResponse)
    } else {
        console.log(new Error('Something went wrong'))
        console.error('Data couldnt changed.')
    }
}

async function patchData(patchedData) {
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const requestBody = JSON.stringify(patchedData);

    const requestOptions = {
        method : 'PATCH',
        body : requestBody,
        headers : {
            'Content-type' : 'application/json'
        }
    }

    const response = await fetch(requestUrl, requestOptions)

    if(response.status === 200) {
        console.log('Requested change has been made')
        const jsonResponse = await response.json();
        createPost(jsonResponse, 'patch')
        console.log(jsonResponse)
    } else {
        console.log(new Error('Something went wrong'))
        console.error('Data couldnt change')
    }
}

async function deleteData() {
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts/1'
    const requestOptions = {
        method : 'DELETE',
    }
    const response = await fetch(requestUrl, requestOptions);
    
    if(response.status === 200) {
        console.log('Data has been deleted')
        const jsonResponse = await response.json();
        createPost(jsonResponse, 'delete')
        console.log(jsonResponse);
    } else {
        console.log(new Error('Something went wrong'))
        console.error('Data couldnt be deleted')
    }
}


function createPost(post, typeOfRequest) {
    const location = document.querySelector(`.${typeOfRequest}-result`);
    let titleOfPost = '';
    
    for(element in post) {

        titleOfPost += `
        <li> ${element} : ${post[element]} </li>
        `
    }

    location.innerHTML = titleOfPost;

}