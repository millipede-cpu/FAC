//NAVBAR

const mobileButton = document.querySelector('#mobile-btn');
const navMenu = document.querySelector('.nav-menu');

mobileButton.addEventListener('click', function() {
  mobileButton.classList.toggle('is-active');
   navMenu.classList.toggle('active');
});



/*IMAGE CAROUSEL*/

let i = 0; //current slide
let j = 8; //total slides

// Variables for dots and images use dom manipulation to access their classes in html
const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container figure");

// Write function for next button, access images with their content id
function next() {
  document.getElementById("content" + (i+1)).classList.remove("click");
  //the modulus operator is there to cycle the images continously
  i = (j + i + 1) % j;
  document.getElementById("content" + (i+1)).classList.add("click");
  indicator(i + 1);
}

// Write function for prev button, access images with their content id
function prev() {
  document.getElementById("content" + (i+1)).classList.remove("click");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i+1)).classList.add("click");
  indicator(i + 1);
}

// Write function for each dot, when the button is clicked on specific index, change color to highlight it
function indicator (num) {
  dots.forEach(function(dot) {
    dot.style.backgroundColor = "transparent";
  });
  document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor= "#6495ED";
}


//The images in the dot function will all be targeted when clicked on each specific index
function dot(index) {
  const images = document.querySelectorAll(".click");

images.forEach(function(image) { 
  image.classList.remove("click");
});


//Every time that a dot is clicked on, it is targeted by the content id number
document.getElementById("content" + index).classList.add("click");
i = index - 1;
indicator(index)
} 




