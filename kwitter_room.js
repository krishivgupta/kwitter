
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyA5Ht84cCAxaQda-_tCzZGGeoQ3j9GOaUk",
      authDomain: "kwitter-ee3e8.firebaseapp.com",
      databaseURL: "https://kwitter-ee3e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee3e8",
      storageBucket: "kwitter-ee3e8.appspot.com",
      messagingSenderId: "878328730647",
      appId: "1:878328730647:web:38034ec7912d29e800b852",
      measurementId: "G-C16293ZZWM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom(){
          Room_name=document.getElementById("user_name").value;
          firebase.database().ref("/").child(Room_name).update({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("Room_name",Room_name); 
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row ;

      });});}
getData();
function redirectToRoomName(name){
      console.log (name);
      localStorage.setItem("Room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}