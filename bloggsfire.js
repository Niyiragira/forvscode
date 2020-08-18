var firebaseConfig = {
    apiKey: "AIzaSyDLhtzMjn726JuVFrxLkeSA1Ulxd7Vs7zE",
    authDomain: "new-firebase-pw.firebaseapp.com",
    databaseURL: "https://new-firebase-pw.firebaseio.com",
    projectId: "new-firebase-pw",
    storageBucket: "new-firebase-pw.appspot.com",
    messagingSenderId: "48938237788",
    appId: "1:48938237788:web:c2a82c6f96414555150b99",
    measurementId: "G-EVHS9C8NFE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let artilclesList=document.querySelector("#div2");

function renderArticle(doc){
  let li=document.createElement("li");
  let title=document.createElement("span");
  let article=document.createElement("span");

  li.setAttribute("data-id",doc.id);
  title.textContent=doc.data().title;
  article.textContent=doc.data().article;

  li.appendChild(title);
  li.appendChild(article)

}

  var db=firebase.firestore();
    db.collection("Blog").get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {
        renderArticle(doc);
      });
      
    })
