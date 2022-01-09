
const firebaseConfig = {
      apiKey: "AIzaSyDNCoos5L2KXdvmMpVV7sX72y1Hs3qAxdg",
      authDomain: "vihaan93-21134.firebaseapp.com",
      databaseURL: "https://vihaan93-21134-default-rtdb.firebaseio.com",
      projectId: "vihaan93-21134",
      storageBucket: "vihaan93-21134.appspot.com",
      messagingSenderId: "342249804214",
      appId: "1:342249804214:web:ea73a45560b7d867e77117"
    };
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      document.getElementById("userName").innerHTML = "Welcome " + user_name + "!";
    
          user_name = localStorage.getItem("user_name");
          room_name = localStorage.getItem("room_name");
    
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
    
      document.getElementById("msg").value = "";
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



function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
      }
      