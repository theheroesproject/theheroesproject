
function playmario()
var myEle = document.getElementById("millenial");
var clickedbutton = document.getElementById("btn1")
var song = new Audio;
song.src = 'Super_Mario.mp3';
if(myEle != null) 
	song.load();
    clickedbutton.onclick()=song.play(); 
}
