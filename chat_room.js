// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEgIFhtT_n9OGmV2sT8Z_gSb3ajU6w5pw",
    authDomain: "kwitter-ccd71.firebaseapp.com",
    databaseURL: "https://kwitter-ccd71-default-rtdb.firebaseio.com",
    projectId: "kwitter-ccd71",
    storageBucket: "kwitter-ccd71.appspot.com",
    messagingSenderId: "1078601373168",
    appId: "1:1078601373168:web:904c06641ac39e168b7935",
    measurementId: "G-2H21XERDC0"
  };
  
  // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
      }
,function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
 //START
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
//END CODE
});});}
 ,getData() )};