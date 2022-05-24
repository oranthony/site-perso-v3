/***** Fix variables *****/
/**
 * Name of the projects corresponding to the images on the carousel
 * @type {string} name to be displayed
 */
let img1Title = "Cocktailize";
let img2Title = "Vocal Assistant";
let img3Title = "Idea Box";



/***** Carousel setup *****/
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  adaptiveHeight: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true
});

/**
 * Bind Flickity event listener: everytime the image is changed (either by user click or by autoplay)
 */
flkty.on( 'change', function( index ) {
  updateTitle(index);
});


/**
 * Previous and next button behaviour
 */
document.getElementById('button-prev').onclick = function() {
  flkty.previous();
};

document.getElementById('button-next').onclick = function() {
  flkty.next();
};


/**
 * Pause autoplay of carousel player when the mouse is on top of the navigation button, then unpause when it's leaving
 * @type {HTMLElement}
 */
let carousel_nav = document.getElementById("carousel-intro__nav");

carousel_nav.addEventListener("mouseenter", function( event ) {
  flkty.pausePlayer()
}, false);

carousel_nav.addEventListener("mouseout", function( event ) {
  flkty.unpausePlayer()
}, false);



/****** Recreating jQuery fadeIn() and fadeOut() in Vanilla JS ******/
/**
 * fade the element, then change the text, then call unfade() to unfade the same element
 * @param divBlock whole block to apply fade animation
 * @param divText div to change the text
 * @param text: the text to be updated
 */
function fade(divBlock, divText, text) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      divBlock.style.display = 'none';
      divText.textContent = text;
      unfade(divBlock);
    }
    divBlock.style.opacity = op;
    divBlock.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 10);
}

/**
 * Unfade element like would fadeOut() in jQuery
 * @param element: html element to unfade
 */
function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

/**
 * Update the title with a new name according to the index
 * @param index: index of the current cell displayed
 */
function updateTitle(index) {
  const divBlock = document.getElementById('carousel-intro__title_block');
  const divText = document.getElementById('carousel-intro__title');

  if (index === 0) {
    fade(divBlock, divText, img1Title);
  }
  if (index === 1) {
    fade(divBlock, divText, img2Title);
  }
  if (index === 2) {
    fade(divBlock, divText, img3Title);
  }
}

