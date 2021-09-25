let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', scroll);

function scroll() {
  if (window.scrollY > 900) {
  navbar.classList.add("background");
  }
  if (window.scrollY < 900) {
    navbar.classList.remove("background");
    }
}
  

var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 40,
    loop: true
  });
