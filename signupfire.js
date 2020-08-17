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


  const signupForm=document.querySelector("#signupForm");
  signupForm.addEventListener("submit",function(e){
      e.preventDefault();


    const userName =document.querySelector("#thename");
    const eemail= document.querySelector("#email");
    const password= document.querySelector("#firstPassword");

     var username = document.getElementById("thename").value;
    var firstPassword= document.getElementById("firstPassword").value;
    var secondPassword=document.getElementById("secondPassword").value;
    var email=document.getElementById("email").value;
    if(username == "") {
      alert(" Please type your username");
      return false;
    } 
    if(firstPassword!==secondPassword ){
         alert("The first password does not match the second")
         return false
     } 
     if(email.indexOf("@") ==-1 || email==""){
         alert("Your email should contain a @")
         return false
     }


      const emailToSave=eemail.value;
      const nameToSave=userName.value;
      const passwordToSave=password.value; 
      console.log("I  am going to save "+emailToSave+" to the firestore.");
      db.collection("SIGN-UPS").add({
          email:emailToSave,
          username:nameToSave,
          password:passwordToSave
      }).then(function(docRef){
          console.log({
            email:emailToSave,
            username:nameToSave,
            password:passwordToSave
          },docRef.id);
      }).catch(function(error){
          console.log("Got an error",error);
      })
       document.querySelector(".alert").style.display="block";
       document.querySelector("#signupForm").reset()

      setTimeout(function(){
        document.querySelector(".alert").style.display="none";
      },7000)

  })



 
  
 
  
