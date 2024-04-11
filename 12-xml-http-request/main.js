// XML HTTP Request

const requestURL = "https://api.github.com/users/KushalxStha"

const xhr = new XMLHttpRequest();
xhr.open('GET',requestURL)

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data = JSON.parse(this.responseText);
        console.log(data);

        document.querySelector('img').src=data.avatar_url
        document.querySelector('#name').innerHTML=data.name
        document.querySelector('#followers').innerHTML=data.followers
        document.querySelector('#repos').innerHTML=data.public_repos
    }
}

xhr.send();