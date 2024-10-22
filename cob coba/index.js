// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWtnfREW95xwq7ELUK2H8L7cr3uaSf264",
  authDomain: "filem-a43ae.firebaseapp.com",
  projectId: "filem-a43ae",
  storageBucket: "filem-a43ae.appspot.com",
  messagingSenderId: "108458006373",
  appId: "1:108458006373:web:54bb720e9ff6b56a2bf38c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Login function
function login() {
  var email = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
      var user = userCredential.user;
      alert("Login berhasil! Selamat datang " + user.email);
      window.location = 'index.html'; // Redirect ke halaman utama setelah login
  })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
  });
}

// Modal video
document.querySelectorAll('.film img').forEach(img => {
  img.addEventListener('click', function() {
      var modal = document.getElementById('videoModal');
      var videoPlayer = document.getElementById('videoPlayer');
      var source = videoPlayer.querySelector('source');
      source.src = this.dataset.video;
      videoPlayer.load();
      modal.style.display = "block";
  });
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  var modal = document.getElementById('videoModal');
  var videoPlayer = document.getElementById('videoPlayer');
  modal.style.display = "none";
  videoPlayer.pause();
}

window.onclick = function(event) {
  var modal = document.getElementById('videoModal');
  if (event.target == modal) {
      modal.style.display = "none";
      videoPlayer.pause();
  }
}
