let navbarlogo = document.querySelector('.alogo');
let li = document.querySelectorAll('.linav');
let pages = document.querySelectorAll("section");
let spanlogo = document.querySelectorAll(".colorlogo");
let options = { threshold: 0 };
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbarlogo.classList.add("backgroundlogo");
          navbarlogo.classList.add("transition");
          li.forEach(element => {
            element.classList.add("backgroundli");
            element.classList.add("transition");
          });
          spanlogo.forEach(element => {
            element.classList.add("colorlogoscroll");
            element.classList.add("transition");
          });
        }
        else {
          navbarlogo.classList.add("transition");
          navbarlogo.classList.remove("backgroundlogo"); 
          li.forEach(element => {
            element.classList.remove("backgroundli");
            element.classList.add("transition");
          }); 
          spanlogo.forEach(element => {
            element.classList.remove("colorlogoscroll");
            element.classList.add("transition");
          });
        }
    });
}, options);

[...pages].forEach((element) => observer.observe(element));

var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 40,
    loop: true
  });
