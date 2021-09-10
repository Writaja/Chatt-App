

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
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
    function addroom(){
          var room_name= document.getElementById("room_name").value; 
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
                
          });
          localStorage.setItem("room_name",room_name);
          window.location="chat_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> "+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

