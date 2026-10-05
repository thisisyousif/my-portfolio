const mobileButton=document.querySelector("#mobile-menu");
const navItems=document.querySelector(".nav-items");
mobileButton.addEventListener('click',() => {
    navItems.classList.toggle("active");
})
const navLinks=document.querySelectorAll(".nav-link");
navLinks.forEach((navl)=>{
    navl.addEventListener('click',()=>{
        navItems.classList.toggle("active");
    })
})
