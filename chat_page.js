//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var  firebaseConfig = {
    apiKey: "AIzaSyBRRNapywILcxv_LgY-dRnIewMlbBCmWis",
    authDomain: "chat-app-f586b.firebaseapp.com",
    databaseURL: "https://chat-app-f586b-default-rtdb.firebaseio.com",
    projectId: "chat-app-f586b",
    storageBucket: "chat-app-f586b.appspot.com",
    messagingSenderId: "317949488128",
    appId: "1:317949488128:web:4292561d345f52e487fce5"
  };
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  var user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML=" Welcome  "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> "+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+= row;
    
         
          });});}
    //End code
  
getData();
function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="chat_page.html";
}
firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
        msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    uname:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";

  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
uname=message_data["uname"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4> "+uname+"<img class='user_tick' sre='3da3e019767446593d6bec8547f57b5d.jpg.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value"+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
    } });  }); }

getData();
function updatelike(message_id){
    button_id=message_id;
    noOfLikes=document.getElementById(button_id).value;
    updatedlike=Number(noOfLikes)+1;
    firebase.database().ref(room_name).child(message_id).update({
          like:updatedslike
    });
     }
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

