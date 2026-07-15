// grab html elements

const hamburgerMenu=document.getElementById("hamburger");

const navlinks=document.getElementById("navlinks");

hamburgerMenu.addEventListener("click",()=>{
    hamburgerMenu.classList.toggle("active");
    navlinks.classList.toggle("active");
    navlinks.classList.toggle("show");
   
})
