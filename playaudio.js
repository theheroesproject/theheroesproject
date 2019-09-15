
var myEle = document.getElementById("millenial");
var song = new Audio;
song.src = 'Super_Mario.mp3';
if(myEle != null) { 
	song.load();
    window.onload=song.play(); 
}
