


const burger = document.querySelector(".toggle_menu");

const hNav = document.querySelector(".header_nav");

const contact = document.querySelector(".contact");
const contactForm = document.querySelector(".contact_forms");
const contactBtn = document.querySelector(".contact_button");
const backDrop = document.querySelector(".backdrop");

const home = document.querySelector(".abt1");
const program = document.querySelector(".program2");
const events = document.querySelector(".events2");
const footer2 = document.querySelector("footer2");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  hNav.classList.toggle("open");
  
  console.log("clicked");
});

burger.addEventListener("click", () => {
    contact.classList.toggle("open");
});



home.addEventListener("click", () => {
    burger.classList.remove("open");
    hNav.classList.remove("open");
    console.log("Testing It works")
});

program.addEventListener("click", () => {
    burger.classList.remove("open");
    hNav.classList.remove("open");
    console.log("Testing It works")
});

events.addEventListener("click", () => {
    burger.classList.remove("open");
    hNav.classList.remove("open");
    console.log("Testing It works")
});

footer2.addEventListener("click", () => {
    burger.classList.remove("open");
    hNav.classList.remove("open");
    console.log("Testing It works")
});

contactBtn.addEventListener("click", () => {

    if(contactForm.classList.contains("open")){
        contactForm.classList.remove("open");
        contactBtn.classList.remove("open");
        backDrop.classList.remove("open");
    }
    else{
        contactForm.classList.add("open");
        contactBtn.classList.add("open");
        backDrop.classList.add("open");
    }
});



