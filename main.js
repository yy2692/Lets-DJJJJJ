
function goToNextVideo(){
	var videoEl = document.querySelector('#tutorialVideo');
	video.src = "#";
}


function logIn(){
  var username = document.querySelector('#userName').value;
  document.querySelector('#djNameOne').innerText = username;
  location.href="index.html";
}

function signUp(){
  var username = document.querySelector('#userName').value;
  document.querySelector('#djNameOne').innerText = username;
  alert("Thank you for signing up! " + username + "!");
  location.href="index.html";
}

function saveMusic() {
  var num = document.querySelector('#saveMusic').value;
  num = num  + 1
  document.querySelector('#saveMusic').innerHTML = `${num}`;
}

function likeMusic() {
  var num = document.querySelector('#likeMusic').value;
  num = num  + 1
  document.querySelector('#saveMusic').innerHTML = `${num}`;
}
