const navLinks = document.querySelector(".nav-links");
const menu = document.querySelector(".icons2");
const body = document.querySelector("body");
menu.addEventListener("click", function(){
    menu.style = "display: none";
    navLinks.style = "display: block";
});

// body.addEventListener("click", function(){
//     menu.style = "display: block";
//      navLinks.style = "display: none"; 
//  });