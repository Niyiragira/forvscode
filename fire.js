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
  var firestore=firebase.firestore();

  const docRef=firestore.doc("samples/sandwichesData")
  const outputHeader =document.querySelector("#hotDogOutPut");
  const inputTextField= document.querySelector("#latestHotDogStatus");
  const saveButton= document.querySelector("#saveButton");

  saveButton.addEventListener("click",function(){
      const textToSave=inputTextField.value; 
      console.log("I  am going to save "+textToSave+" to the firestore.");
      docRef.set({
          hotHogStatus:textToSave
      }).then(function(){
          console.log("status saved!");
      }).catch(function(error){
          console.log("Got an error",error);
      })
  });