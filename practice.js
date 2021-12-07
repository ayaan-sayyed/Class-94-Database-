
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA5NUonJwnGYDB8w6wxJ81G1_ZT8cF7MXg",
  authDomain: "practice-ac678.firebaseapp.com",
  databaseURL: "https://practice-ac678-default-rtdb.firebaseio.com",
  projectId: "practice-ac678",
  storageBucket: "practice-ac678.appspot.com",
  messagingSenderId: "86610679246",
  appId: "1:86610679246:web:2d3a59ad44259807a9079f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function addUser() {
  user_name= document.getElementById("user_name").value;  
  firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
  });
}
