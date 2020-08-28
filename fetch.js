
//GETTING THE ARTICLES
const container = document.querySelector('#div2')

const renderPost = (doc) => {
    const post = document.createElement('div')
    post.setAttribute('class', 'post')

    const title = document.createElement('h1')
    title.setAttribute('class', 'post-title')
    title.textContent = doc.title

    const content = document.createElement('p')
    content.setAttribute('class', 'post-content')
    content.textContent = doc.content

    post.appendChild(title)
    post.appendChild(content)

    container.appendChild(post)
}

fetch('http://localhost:3000/blogs', {
    method: 'GET'
}).then(res=>res.json())
.then(dt=>{
    console.log(dt)
    dt.forEach(article => renderPost(article))
})

//Posting articles


const myForm=document.getElementById("postBtn");
myForm.addEventListener("click",function(e){
  e.preventDefault();
let title=document.querySelector("#title").value;
let content=document.querySelector("#content").value;

  
  fetch("http://localhost:3000/blogs",{
    cors:"no-cors",
    method:"POST",
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    },
    body:JSON.stringify({
      title:title,
      content:content
  })
  })
  .then(response=>{
    return response.json();
  })
})


