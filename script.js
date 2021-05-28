//NAVBAR

const responsiveButton = document.querySelector('#responsive-button');
const navMenu = document.querySelector('.nav-menu');

responsiveButton.addEventListener('click', function() {
  responsiveButton.classList.toggle('is-active');
   navMenu.classList.toggle('active');
});

//IMAGE CAROUSEL

const picReel = document.querySelector('.pic-reel');
const pics = document.querySelectorAll('.pic-reel img');

const back = document.querySelector('#back');
const next = document.querySelector('#next');

let counter = 1;
const size = pics[0].clientWidth;
picReel.style.transform = 'translateX(' + (-size * counter) + 'px)';


next.addEventListener('click', () => {
  if (counter >= pics.length-1) return;
  picReel.style.transition = "transform 0.3s ease-in-out";
  counter++;
  picReel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
});

back.addEventListener('click', () => {
  if (counter <= 0) return;
  picReel.style.transition = "transform 0.3s ease-in-out";
  counter--;
  picReel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
});

picReel.addEventListener('transitioned', () => {
  if (pics[counter].id === 'pic-last') {
    picReel.style.transition = "none";
    counter = pics.length -2;
    picReel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
    if (pics[counter].id === 'pic-first') {
      picReel.style.transition = "none";
      counter = pics.length - counter;
      picReel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});