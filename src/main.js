let openbtn =document.querySelector(".ri-menu-fill");
let closebtn =document.querySelector(".ri-close-fill");
let menu= document.querySelector(".navbar--menu");

openbtn.addEventListener("click",()=>
{
    openbtn.classList.toggle("hide");
    closebtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});


closebtn.addEventListener("click",()=>
{
    openbtn.classList.toggle("hide");
    closebtn.classList.toggle("hide");
    menu.classList.toggle("hidden");

});
