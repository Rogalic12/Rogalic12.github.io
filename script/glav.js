var slideIndex = 0;
setTimeout(showSlides);

function showSlides() {
    var i;
    var slides = document.querySelectorAll(".mySlides")

    console.log(slides);
    
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    slides[slideIndex-1].style.display ="block"

    setTimeout(showSlides, 10000);
}
var isToggle = true;

var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function () {
  isToggle
    ? page.classList.add("darkTheme")
    : page.classList.remove("darkTheme");

  isToggle = !isToggle;
};