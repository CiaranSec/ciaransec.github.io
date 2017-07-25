var sound = new Array();
sound[0]= "Attack.mp3"
sound[1]= "Attack.mp3"
sound[2]= "Attack.mp3"
sound[3]= "Attack.mp3"
sound[4]= "Attack.mp3"
sound[5]= "Attack.mp3"

var randomsound = Math.floor(Math.random() * 6);
document.write ('<audio id="sound" loop autoplay preload><source src= "' + sound[randomsound] + '" hidden=true type="audio/mpeg" autostart=true loop=true>')
