function requestUserRepos(username){
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/users/${username}/repos?sort=created&order=asc`;
  xhr.open('GET', url, true);
  xhr.onload = function() {
      const data = JSON.parse(this.response);
      for(let i in data) {
        var container = document.getElementById('card-proj');
        console.log(data[i].name);
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card proj-img">
        <div class="overlay">
          <h4 class="overlay-title">${data[i].name}</h4>
            <svg class="card_arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
            <a class="download" href="https://github.com/erwanclx/" target="_blank">Voir le code <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
                  `;
       container.appendChild(card);
      }
  }
  xhr.send();  
}
requestUserRepos('erwanclx');
const buttonRight = document.querySelector("#btn-scroll-right");
const buttonLeft = document.querySelector("#btn-scroll-left");
cardproj = document.querySelector('#card-proj');
// buttonRight.onclick = function () {
//   document.getElementById('card-proj').scrollLeft += 400;
// };
// buttonLeft.onclick = function () {
//   document.getElementById('card-proj').scrollLeft -= 400;
// };
function scrollLefts(){
  cardproj.scrollLeft += 400
  };

function scrollRight(){
  cardproj.scrollLeft -=400
};

  buttonLeft.addEventListener('click', scrollRight)
  buttonRight.addEventListener('click', scrollLefts)
  
  // if(cardproj.scrollLeft == 0){
  // buttonLeft.classList.add('opacity-0-css-class')
  // }
  
  if(cardproj.scrollLeft !== 0){
  buttonLeft.classList.remove('opacity-0-css-class');
  }