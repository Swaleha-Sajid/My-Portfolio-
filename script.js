/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.1
}

);

document
.querySelectorAll(
".project-card,.service-card,.skill-pill,.contact-box"
)
.forEach((el)=>{

    observer.observe(el);

});


/* =========================
   NAVBAR EFFECT
========================= */

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,23,42,.95)";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.2)";

    }

    else{

        header.style.background =
        "rgba(15,23,42,.75)";

        header.style.boxShadow =
        "none";

    }

});


/* =========================
   SMOOTH BUTTON HOVER
========================= */

document
.querySelectorAll(".btn")
.forEach((btn)=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform =
        "translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform =
        "translateY(0px)";

    });

});