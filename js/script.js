let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};








let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='  + id + ']') .classList.add('active');
        });
        };
    });

    let header = document.querySelector('.header');
    
    
    header.classList.toggle('sticky', window.scrollY > 100 ); 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    };


    let darkModeIcon = document.querySelector('#darkMode-icon');

    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    }




    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });


    ScrollReveal().reveal('.home-content', { origin: 'top'});
    ScrollReveal().reveal('.home-img img, .about-content h3, .about-content p, .services-container, .about, portfolioo-box, .box,   btn', { origin: 'bottom'});

    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left'});
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, ', { origin: 'right'});


    const serviceItems = document.querySelector(".service-items");
  const popup = document.querySelector(".popup-box")
  const popupCloseBtn = popup.querySelector(".popup-close-btn");
  const popupCloseIcon = popup.querySelector(".popup-close-icon");

  serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h2 = item.querySelector("h2").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       popup.querySelector("h2").innerHTML = h2;
    
       
       popupBox();
    }

  })

  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);

  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })

  function popupBox(){
    popup.classList.toggle("open");
  }

  