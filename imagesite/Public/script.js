
var currentImage = '';
var page = 0;
var imagePage = 0;
var images = [
  "img/boom.jpg",
  "img/bos.jpg",
  "img/Car.jpg",
  "img/cat.jpg",
  "img/cola.jpg",
  "img/grim.jpg",
  "img/gun.jpg",
  "img/gun2.jpg",
  "img/hood.jpg",
  "img/ranger.jpg",
  "img/space.jpg",
];

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var increase = function() {
  httpGetAsync('/api/increase', callbackFunc);
}

var decrease = function() {
  httpGetAsync('/api/decrease', callbackFunc);
}

function callbackFunc(res) {
  console.log(res);
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

var update = function() {
  removeImages();
  showImages();
}
var pageBack = function() {
  page --;
  if(page > 0) {
    page -= 1;
  }
  update();
}
var update1 = function() {
  removeImages1();
  showSingleImage(images[imagePage]);
}
var pageForward1 = function() {
    imagePage ++;
  if(imagePage > (images.length - 1)) {
    imagePage = 0;
  }
  update1();
}
var pageBack1 = function() {
    imagePage --;
  if(imagePage < 0) {
    imagePage = images.length-1;
  }
  update1();
}

var setImage = function(path) {
  for(var i = 0; i < images.length; i++) {
    if(path === images[i]) {
      imagePage = i;
    }
  }
  showSingleImage(path);
}

var showSingleImage = function(path) {
  var element = document.getElementById("container");
  var img = document.createElement("img");
  img.src = path;
  img.className = "thumbnail";

  element.appendChild(img);
}


var pageForward = function() {
  if(page < (images.length / 8)) {
    page += 1;
  }
  update();
}

var showImages = function() {
  var element = document.getElementById("images");
  var start = page * 8;
  var end = start + 8;
  if(end >= images.length) {
    end = images.length - 1;
  }
  for(var i = start; i < end; i++) {
    var path = images[i];
    var a = document.createElement("a");
    a.href = "image.html?image=" + path;
    a.onclick = function() {
      currentImage = path;
    };
    var img = document.createElement("img");
    img.src = path;
    img.className = "thumbnail";

    a.appendChild(img);
    element.appendChild(a);
  }
}

var removeImages1 = function() {
  var element = document.getElementById("container");
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  };
}

var removeImages = function() {
  var element = document.getElementById("images");
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  };
}
