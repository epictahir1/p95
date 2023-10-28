const firebaseConfig = {
      apiKey: "AIzaSyCzk7zFU7xDeOSKdBsE_Uj_ZKGfgNPoj0U",
      authDomain: "food-ordering-app-dd1d1.firebaseapp.com",
      databaseURL: "https://food-ordering-app-dd1d1-default-rtdb.firebaseio.com",
      projectId: "food-ordering-app-dd1d1",
      storageBucket: "food-ordering-app-dd1d1.appspot.com",
      messagingSenderId: "17778393532",
      appId: "1:17778393532:web:3e6a7d2cd1046da34d6bb9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + room_name) ;
     row = "<div class='room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     //End code
      });});}
getData();
function addRoom()
{
      room_name = document .getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_pagee.html";

}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}