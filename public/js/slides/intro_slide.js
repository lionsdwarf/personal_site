
var setSkrollrAttr = function(elementArray, scrollDuration) {
  $.each(elementArray, function(i, val) {
    var position = App.position;
    var element = $(val);
    //At initial scroll position, set stroke-dashoffset equal to element's stroke-dasharray 
    var iDataAttr = 'data-' + position + 'p';
    var dashArray = element.css('stroke-dasharray');
    var dashArray = parseInt(dashArray);
    var iDataValue = 'stroke-dashoffset:' + dashArray + ';  ';
    element.attr(iDataAttr, iDataValue);
    //At final scroll position, set stroke-dashoffset to 0
    var finalPosition = position + scrollDuration;
    var fDataAttr = 'data-' + finalPosition + 'p';
    element.attr(fDataAttr, 'stroke-dashoffset: 0;');
    //Revise initial scroll position for subsequent skroll
    App.position = finalPosition;
  });
};

var skrollSpiralHoles = function() {
  var elementArray = $('#spiral-holes').children();
  var scrollDuration = 2;
  setSkrollrAttr(elementArray, scrollDuration);
};

var skrollSpiral = function() {
  var elementArray = [$('#spiral')];
  var scrollDuration = 30;
  setSkrollrAttr(elementArray, scrollDuration);
};

var skrollWebPortfolio = function() {
  var elementArray = [
    $('#web-portfolio'), 
    $('#portfolio-t'),
    $('#portfolio-i')
    ];
  var scrollDuration = 40;
  setSkrollrAttr(elementArray, scrollDuration);
};

var skrollByLionsdwarf = function() {
  var elementArray = [
    $('#by-lionsdwarf'),
    $('#lionsdwarf-i')
    ];
  var scrollDuration = 40;
  setSkrollrAttr(elementArray, scrollDuration);
};