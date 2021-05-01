export default function animateLetter(){
  let lets = document.querySelectorAll(".home-title__letter");

  for(let i = 0; i < lets.length; i++){
    lets[i].addEventListener('mouseenter', moveLet)
    lets[i].addEventListener('mouseout', leaveLet)
  }

  function moveLet(e) {
    this.classList.remove('animate__animated', 'animate__flipInX')
    this.style.transform = "rotateX(" + -e.offsetY / 1 + "deg) rotateY(" + e.offsetX / 1 + "deg)";
  }

  function leaveLet(){
    this.style.transform = "rotate(0)";
  }
}