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

const form=document.querySelector("#contactForm");
form.addEventListener("submit",function(e){
  e.preventDefault();
 

  const nameOf=document.querySelector("#thename");
  const eemail=document.querySelector("#email")
  const content= document.querySelector("#content");
  const save=document.querySelector("#saveButton");

      var thename = document.getElementById("thename").value;
    var email=document.getElementById("email").value;
    if(thename == "") {
      alert(" Please type your Names");
      return false;
    } 
    if(email.indexOf("@") ==-1 || email==""){
         alert("You should type an email which contain an @")
         return false
     }

      const emailToSave=eemail.value;
      const contentToSave=content.value;
      const nameToSave=nameOf.value;
       
      console.log("I  am going to save "+nameToSave+"\'s messageto the firestore.");
      db.collection("Contact messages").add({
          name:nameToSave,
          email:emailToSave,
          content:contentToSave
          
      }).then(function(docRef){
          console.log({
            name:nameToSave,
            email:emailToSave,
            content:contentToSave
          },docRef.id);
      }).catch(function(error){
          console.log("Got an error",error);
      })
      document.querySelector(".alert").style.display="block";
      document.querySelector("#contactForm").reset()

      setTimeout(function(){
        document.querySelector(".alert").style.display="none";
      },7000)

});

