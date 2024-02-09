//https://www.the-art-of-web.com/css/fading-slideshow-no-jquery/
var gal = function(e) {
  var stage = document.getElementById("gallery");
  var arr = stage.getElementsByTagName("img");
  var fadeComplete = function(e) {stage.appendChild(arr[0])};
  
  for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }
};

function callGal(classHTML){
  let renderImg = `  <img class='${classHTML}' src='Assets/Images/Gallery/gallery1.jpg'>  <img class='${classHTML}' src='Assets/Images/Gallery/gallery2.jpg'>  <img class='${classHTML}' src='Assets/Images/Gallery/gallery3.jpg'>  <img class='${classHTML}' src='Assets/Images/Gallery/gallery4.jpg'>  <img class='${classHTML}' src='Assets/Images/Gallery/gallery5.jpg'>  <img class='${classHTML}' src='Assets/Images/Gallery/gallery6.jpeg'>  <img class='${classHTML}' src='Assets/Images/Gallery/gallery7.jpg'>  <img class='${classHTML}' src='Assets/Images/Gallery/gallery8.jpg'>`;

  return renderImg;
}

function createModal(){
  let build = '';
  build += "<div id='gallery' onload='gallery_home()'>";
  build += callGal('slides');
  build += "</div>";

  let back = '';
  back += `<div id='popup'>`;
  back += `  <h3 style='text-align:center; font-size:35px; margin-bottom:15px;'>Gallery</h3>`;
  back += `  <div id='pop'>`;
  back += callGal('');
  back += `  </div>`;
  back += `</div>`;

  let modal1 = new Modal(build, back);
  modal1.render('output');

  gal();
}