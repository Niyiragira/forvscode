var config = {
    apiKey: "AIzaSyAb_8PpPP78f6YgGFZtHuYnN-rlGmjsDkA",
    authDomain: "my-contact-form-b8d0f.firebaseapp.com",
    databaseURL: "https://my-contact-form-b8d0f.firebaseio.com",
    projectId: "my-contact-form-b8d0f",
    storageBucket: "my-contact-form-b8d0f.appspot.com",
    messagingSenderId: "326230213604",
    appId: "1:326230213604:web:82381d01c001e92e2f7df1",
    measurementId: "G-YPGWT8NVTG"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  //referencing the datatbase
  const messagesRef= firebase.database().ref("Sign-ups")

//Listening event
document.getElementById("contactForm").addEventListener('submit',submitForm)
//submit form

function submitForm(e){
    e.preventDefault();

    var name=getInputVal("name");
    var email=getInputVal("email");
    var passcode=getInputVal("passcode");

    saveMessage(name,email,passcode);

}

//get element values
function getInputVal(id){
    return document.getElementById(id).value;
    
   
}

function saveMessage(name,email,passcode){
    var newMessagesRef=messagesRef.push();
    newMessagesRef.set({
        name:name,
        email:email,
        passcode:passcode
    });
}

