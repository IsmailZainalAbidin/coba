function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jUr5hC7OdE":
        Script1();
        break;
      case "6jCkKoZ9ZwC":
        Script2();
        break;
      case "5uitjQnV2IP":
        Script3();
        break;
      case "5xqs5L5nXi4":
        Script4();
        break;
      case "6PISFBW5rHS":
        Script5();
        break;
      case "5sUaq7Engpe":
        Script6();
        break;
      case "5oOTcwgsfUZ":
        Script7();
        break;
      case "5hQ8zLzyFKK":
        Script8();
        break;
      case "5nnuzjSkcZQ":
        Script9();
        break;
      case "6KdWizmio5L":
        Script10();
        break;
      case "64pzyEe2Xdp":
        Script11();
        break;
      case "6Zql6zpFWrM":
        Script12();
        break;
      case "5zeB33WqjlP":
        Script13();
        break;
      case "6YYFcWV1w9j":
        Script14();
        break;
      case "6WYMGnDsJGa":
        Script15();
        break;
      case "6PY5ZSnL8Rj":
        Script16();
        break;
      case "6guJvBZKLzC":
        Script17();
        break;
      case "5l7mge1hLxt":
        Script18();
        break;
      case "6CK8qEOdo5a":
        Script19();
        break;
      case "63qQvMgEZHT":
        Script20();
        break;
      case "5vjjOLTCpdJ":
        Script21();
        break;
      case "65I6gZuKF9K":
        Script22();
        break;
      case "6XsLeWbS7qa":
        Script23();
        break;
      case "6SxQSBzzbay":
        Script24();
        break;
      case "5YZJQFO60DK":
        Script25();
        break;
      case "5W5MKR9IjMa":
        Script26();
        break;
      case "6RlCQ5cDXeP":
        Script27();
        break;
      case "5xda6rexHXR":
        Script28();
        break;
      case "6P4iVAwEanu":
        Script29();
        break;
      case "6aOJNdQ3aox":
        Script30();
        break;
      case "5hxo2eknTvj":
        Script31();
        break;
      case "6fBX6gj63R8":
        Script32();
        break;
      case "6TEoBfZEHip":
        Script33();
        break;
      case "62cki8OauTZ":
        Script34();
        break;
      case "6ovagzX7hqN":
        Script35();
        break;
      case "5tQIvn6H0f1":
        Script36();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
}

toggleFullScreen();

}

function Script2()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
}

toggleFullScreen();

}

function Script3()
{
  //Open communication between Storyline and Javascript
var player = GetPlayer();

//Get the value of the TextEntry field from Storyline
//(Replace "TextEntry" with your Storyline text entry variable name, if not "TextEntry")
var textEntered = player.GetVar("username");
var textEntered = player.GetVar("class");
var textEntered = player.GetVar("number");

//Determine the number of characters of the text entered
var numCharacters = textEntered.length;

//We will count words by counting spaces
//First, trim off any leading or trailing space
var textEntered = textEntered.replace(/(^\s*)|(\s*$)/gi,"");

//If there are 2 or more spaces in a row, reduce them to 1 space
var textEntered = textEntered.replace(/[ ]{2,}/gi," ");

//Exclude new lines with an initial space
var textEntered = textEntered.replace(/\n /,"\n");

//Now count the remaining spaces
var numWords = textEntered.split(' ').filter(String).length;

//Send these variable values back to Storyline
//(These variables must already exist in Storyline!)
player.SetVar("numCharacters", numCharacters);
player.SetVar("numWords", numWords);
}

function Script4()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
}

toggleFullScreen();

}

function Script5()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script6()
{
  var player = GetPlayer();
var volume = player.GetVar("volume");

function adjustVolume() {
  var mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(function(element) {
    volume = Math.max(0, Math.min(10, volume));
    var adjustedVolume = volume / 10;
    element.volume = adjustedVolume;
    element.muted = (volume === 0);
  });
}

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
    var audio = document.getElementById('bgSong');
    audio.volume = 1.0;

    // Save Location when loading audio
    var savedLocation = Location;
}

adjustVolume();

}

function Script7()
{
  var player = GetPlayer();
var volume = player.GetVar("volume");

function adjustVolume() {
  var mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(function(element) {
    volume = Math.max(0, Math.min(10, volume));
    var adjustedVolume = volume / 10;
    element.volume = adjustedVolume;
    element.muted = (volume === 0);
  });
}

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
    var audio = document.getElementById('bgSong');
    audio.volume = 1.0;

    // Save Location when loading audio
    var savedLocation = Location;
}

adjustVolume();

}

function Script8()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script9()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"tokyo.mp3";
audio.load();
audio.play();
// Simpan Location saat memuat audio
var savedLocation = Location;
}

function Script10()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"adaytoremember.mp3";
audio.load();
audio.play();
// Simpan Location saat memuat audio
var savedLocation = Location;
}

function Script11()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"study.mp3";
audio.load();
audio.play();
}

function Script12()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"memories.mp3";
audio.load();
audio.play();
}

function Script13()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"deep.mp3";
audio.load();
audio.play();
}

function Script14()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script15()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
}

toggleFullScreen();

}

function Script16()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script17()
{
  var player = GetPlayer();
var volume = player.GetVar("volume");

function adjustVolume() {
  var mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(function(element) {
    volume = Math.max(0, Math.min(10, volume));
    var adjustedVolume = volume / 10;
    element.volume = adjustedVolume;
    element.muted = (volume === 0);
  });
}

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
    var audio = document.getElementById('bgSong');
    audio.volume = 1.0;

    // Save Location when loading audio
    var savedLocation = Location;
}

adjustVolume();

}

function Script18()
{
  var player = GetPlayer();
var volume = player.GetVar("volume");

function adjustVolume() {
  var mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(function(element) {
    volume = Math.max(0, Math.min(10, volume));
    var adjustedVolume = volume / 10;
    element.volume = adjustedVolume;
    element.muted = (volume === 0);
  });
}

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
    var audio = document.getElementById('bgSong');
    audio.volume = 1.0;

    // Save Location when loading audio
    var savedLocation = Location;
}

adjustVolume();

}

function Script19()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script20()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"tokyo.mp3";
audio.load();
audio.play();
// Simpan Location saat memuat audio
var savedLocation = Location;
}

function Script21()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"adaytoremember.mp3";
audio.load();
audio.play();
// Simpan Location saat memuat audio
var savedLocation = Location;
}

function Script22()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"study.mp3";
audio.load();
audio.play();
}

function Script23()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"memories.mp3";
audio.load();
audio.play();
}

function Script24()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"deep.mp3";
audio.load();
audio.play();
}

function Script25()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script26()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
}

toggleFullScreen();

}

function Script27()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script28()
{
  var player = GetPlayer();
var volume = player.GetVar("volume");

function adjustVolume() {
  var mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(function(element) {
    volume = Math.max(0, Math.min(10, volume));
    var adjustedVolume = volume / 10;
    element.volume = adjustedVolume;
    element.muted = (volume === 0);
  });
}

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
    var audio = document.getElementById('bgSong');
    audio.volume = 1.0;

    // Save Location when loading audio
    var savedLocation = Location;
}

adjustVolume();

}

function Script29()
{
  var player = GetPlayer();
var volume = player.GetVar("volume");

function adjustVolume() {
  var mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(function(element) {
    volume = Math.max(0, Math.min(10, volume));
    var adjustedVolume = volume / 10;
    element.volume = adjustedVolume;
    element.muted = (volume === 0);
  });
}

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
    var audio = document.getElementById('bgSong');
    audio.volume = 1.0;

    // Save Location when loading audio
    var savedLocation = Location;
}

adjustVolume();

}

function Script30()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

function Script31()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"tokyo.mp3";
audio.load();
audio.play();
// Simpan Location saat memuat audio
var savedLocation = Location;
}

function Script32()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"adaytoremember.mp3";
audio.load();
audio.play();
// Simpan Location saat memuat audio
var savedLocation = Location;
}

function Script33()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"study.mp3";
audio.load();
audio.play();
}

function Script34()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"memories.mp3";
audio.load();
audio.play();
}

function Script35()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"deep.mp3";
audio.load();
audio.play();
}

function Script36()
{
  var player = GetPlayer();
player.SetVar("FullScreen", true);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

toggleFullScreen();

}

