var showSingleImage = function(path) {
  var element = document.getElementById("container");
  var img = document.createElement("img");
  img.src = path;
  img.className = "thumbnail";

  element.appendChild(img);
}
