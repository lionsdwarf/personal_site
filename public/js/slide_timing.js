
var initializeSlide = function(slide) {
  //Slide remains off screen for duration equal to prior slide's final scroll position
  var remainFixed = 'data-' + App.position + 'p';
  slide.attr(remainFixed, 'transform:translate(0, 100%)');
  //Set transition point
  App.position = App.position + 100;
  var transition = 'data-' + App.position + 'p';
  slide.attr(transition, 'transform: translate(0, 0%)');
};

var finalizeSlide = function(slide) {
  //Slide remains fixed on screen for duration of scrolling
  var remainFixed = 'data-' + App.position + 'p';
  slide.attr(remainFixed, 'transform:translate(0, 0%)');
  //Set slide transition point 
  var finalPosition = App.position + 100;
  var transition = 'data-' + finalPosition + 'p';
  slide.attr(transition, 'transform: translate(0, -100%)');
};