
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

var skrollLionsdwarfDuplicates = function() {
  var elementArray = [
    $('#lionsdwarf-duplicates')
    ];
  var scrollDuration = 20;
  setSkrollrAttr(elementArray, scrollDuration);
};