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

  
  const userName =document.querySelector("#userName");
  const email= document.querySelector("#email");
  const password= document.querySelector("#firstPassword");

  
  saveButton.addEventListener("click",function(){
      const emailToSave=email.value;
      const nameToSave=userName.value;
      const passwordToSave=password.value; 
      console.log("I  am going to save "+emailToSave+" to the firestore.");
      db.collection("SIGN-UPS").add({
          email:emailToSave,
          username:nameToSave,
          password:passwordToSave
      }).then(function(docRef){
          console.log("status saved!",docRef.id);
      }).catch(function(error){
          console.log("Got an error",error);
      })
  });