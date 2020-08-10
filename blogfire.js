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
  var db=firebase.firestore();

  const outputHeader=document.querySelector("#articleOut")
  const title =document.querySelector("#title");
  const content= document.querySelector("#content");
  const load=document.querySelector("#loadButton");
  const save=document.querySelector("#saveButton");

  saveButton.addEventListener("click",function(){
      const titleToSave=title.value;
      const contentToSave=content.value;
       
      console.log("I  am going to save "+titleToSave+" to the firestore.");
      db.collection("Blog").add({
          title:titleToSave,
          content:contentToSave,
          
      }).then(function(docRef){
          console.log("status saved!",docRef.id);
      }).catch(function(error){
          console.log("Got an error",error);
      })
  });

  loadButton.addEventListener("click",function(){
      db.collection("Blog").get().then(function(doc){
          if(doc && doc.exists){
            const myData=doc.data();  
            outputHeader.innerText="Article status:"+ myData.content
          }
      }).catch(function(error){
        console.log("Got an error:",error)
      })
  })