  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAuEzz67VJkf0Rcp63LV62EpF-sN9Ut29c",
  authDomain: "kwitter-4f85a.firebaseapp.com",
  databaseURL: "https://kwitter-4f85a-default-rtdb.firebaseio.com",
  projectId: "kwitter-4f85a",
  storageBucket: "kwitter-4f85a.appspot.com",
  messagingSenderId: "99623017432",
  appId: "1:99623017432:web:4192db58ee38770847b0ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Pahaaaro sa, " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }