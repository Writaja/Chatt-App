

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
 const firebaseConfig = {
      apiKey: "AIzaSyAekSwtbGcnLWXZxeFcN7pGU414v2Esioc",
      authDomain: "chat-app-55107.firebaseapp.com",
      databaseURL: "https://chat-app-55107-default-rtdb.firebaseio.com",
      projectId: "chat-app-55107",
      storageBucket: "chat-app-55107.appspot.com",
      messagingSenderId: "652565942352",
      appId: "1:652565942352:web:e7b960ecf5b86cc77b4155"
    };
    // Initialize Firebase

    const app = initializeApp(firebaseConfig);

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

