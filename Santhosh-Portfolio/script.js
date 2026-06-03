/* =========================
   LOAD HEADER
========================= */

fetch("header.html")

.then(response => response.text())

.then(data => {

    document.getElementById("header")
    .innerHTML = data;

    activateNavbar();

});

/* =========================
   ACTIVE NAVBAR
========================= */

function activateNavbar(){

    const currentPage =
    window.location.pathname
    .split("/")
    .pop();

    const navLinks =
    document.querySelectorAll(".nav-links a");

    navLinks.forEach(link=>{

        const linkPage =
        link.getAttribute("href");

        if(linkPage === currentPage){

            link.classList.add("active");

        }

    });

}

/* =========================
   LOAD FOOTER
========================= */

fetch("footer.html")

.then(response => response.text())

.then(data => {

    document.getElementById("footer")
    .innerHTML = data;

});

/* =========================
   TYPING EFFECT
========================= */

const roles = [

    "Java Full Stack Developer",

    "Frontend Developer",

    "Backend Developer",

    "Manual Test Engineer",

    "API Test Engineer",

    "Automation Test Engineer",

    "Quality Analyst",

    "Support Engineer"

];

let roleIndex = 0;

let charIndex = 0;

let typingText =
document.querySelector(".typing-text");

function typeEffect(){

    if(!typingText) return;

    if(charIndex < roles[roleIndex].length){

        typingText.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        roles[roleIndex].substring(0,charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

        setTimeout(typeEffect,300);

    }

}

/* START TYPING */

if(typingText){

    typingText.textContent = "";

    typeEffect();

}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(

    ".section, .skill-card, .project-card"

);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active-reveal");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =========================
   CURSOR GLOW EFFECT
========================= */

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener(
    "mousemove",

    (e)=>{

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }

);

/* =========================
   PROJECT CARD HOVER EFFECT
========================= */

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${(y - rect.height/2)/20}deg)
        rotateY(${-(x - rect.width/2)/20}deg)
        scale(1.03)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

/* =========================
   DYNAMIC FOOTER YEAR
========================= */

setTimeout(()=>{

    const footerText =
    document.querySelector("footer p");

    if(footerText){

        const year =
        new Date().getFullYear();

        footerText.innerHTML =
        `© ${year} Santhosh Portfolio | All Rights Reserved`;

    }

},500);

/* =========================
   PAGE LOADER EFFECT
========================= */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(

"🔥 Portfolio Loaded Successfully"

);