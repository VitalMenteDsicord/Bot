/* RESPONSIVE NAV */
function ResponsiveNav() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {x.className += " mobile";} 
  else {x.className = "menu";}
}
  

/* SLIDE SHOW - INICIO */ 

var slideInicio = 0;
  
function slideImg() {
    let imagenes = document.getElementsByClassName("imagenes");
    for (let i = 0; i < imagenes.length; i++){imagenes[i].style.display = "none";}
    slideInicio++;
    if (slideInicio > imagenes.length) {slideInicio = 1}  
    imagenes[slideInicio-1].style.display = "block";
    setTimeout(slideImg, 10000);
}
  

/* SLIDE SHOW - SERVICES */ 

var slideServicesT = 0;

function slideServices() {
  let imagenesSD = document.getElementsByClassName("servicio-destacado");  
  let imagenesSN = document.getElementsByClassName("servicio-nuevo");  

  for (let i = 0; i < imagenesSD.length; i++){imagenesSD[i].style.display = "none";}
  slideServicesT++;
  if (slideServicesT > imagenesSD.length) {slideServicesT = 1} 

  imagenesSD[slideServicesT-1].style.display = "block";
  setTimeout(slideServices, 8000);
}

function slideServicesNEW() {
  let imagenesSD = document.getElementsByClassName("servicio-nuevo");  

  for (let i = 0; i < imagenesSD.length; i++){imagenesSD[i].style.display = "none";}
  slideServicesT++;
  if (slideServicesT > imagenesSD.length) {slideServicesT = 1} 

  imagenesSD[slideServicesT-1].style.display = "block";
  setTimeout(slideServicesNEW, 8000);
}
  