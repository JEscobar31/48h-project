// document.addEventListener('click', function (event) {

// 	// If the clicked element doesn't have the right selector, bail
// 	if (event.target.matches('.js-click-me'))  {
//     // Don't follow the link
//   	event.preventDefault();
//     // Add class to show and add the color
//     document.querySelector('.overlay').classList.add('show', event.target.dataset.color);
//   }
  
//   if (event.target.matches('.js-close-overlay'))  {
//     // Don't follow the link
//   	event.preventDefault();
//     // Add class to show and add the color
//     document.querySelector('.overlay').classList.remove('show', 'colorRed', 'colorBlue', 'colorGreen', 'colorYellow');
//   }
// }, false);

let box = document.querySelector('.box');

let angle = 0;
let move = 0;

function rotate() {
  angle = (angle) % 360;
  box.style.transform = `rotate(${angle}deg)`;
  window.requestAnimationFrame(rotate);
}

const id = window.requestAnimationFrame(rotate);

/*----------------*/

