function goToNextVideo() {
  var videoEl = document.querySelector('#tutorialVideo');
  videoEl.src = "https://www.youtube.com/embed/eLDe2sGV4RU?list=PL_YqEG_6NcDsHudcr-jjgMs_tVhrK2nbw";
  //I want to build a loop on this goToNextVideo, but I failed the task changeImage loop in Tinkering. Also no idea this one.

}

function logIn() {
  var username = document.querySelector('#userName').value;
  //document.querySelector('#djNameOne').innerText = username;
  location.href = "index.html";
}

function signUp() {
  var username = document.querySelector('#userName').value;
  //document.querySelector('#djNameOne').innerText = username;
  alert("Thank you for signing up! " + username + "!");
  location.href = "index.html";
}


var num1 = 16,
  num2 = 17;

function saveMusic() {
  num1 = num1 + 1
  document.querySelector('#num1').innerHTML = `${num1}`;
}

function likeMusic() {
  num2 = num2 + 1
  document.querySelector('#num2').innerHTML = `${num2}`;
}
