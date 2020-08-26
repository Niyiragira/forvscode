
const getBtn=document.getElementById("getBtn");

//GETTING THE ARTICLES
const getData= () =>{
  try {
    fetch('http://localhost:3000/blogs'
    )
  .then(response => response.json())
  .then(json => console.log(json))
  } catch (error) {
    console.log(error)
  }
} 
getBtn.addEventListener("click",getData);


//Posting articles


const myForm=document.getElementById("postBtn");
myForm.addEventListener("click",function(e){
  e.preventDefault();
let title=document.getElementById("title");
let content=document.getElementById("content");
  
  fetch("http://localhost:3000/blogs",{
    cors:"no-cors",
    method:"POST",
    body:JSON.stringify({
      title:title,
      content:content
    })
  })
  .then(response=>{
    console.log(response);
  })
})


