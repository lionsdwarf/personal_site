//Skroll intro div, which triggers hide/show of scroll msg
var skrollIntroSVG = function() {
  var elementArray = [$('#intro-svg')];
  var scrollDuration = 0.5;
  setSkrollrAttr(elementArray, scrollDuration); 
};

var hideScrollMsg = function() {
  if ($('#intro-svg').hasClass('skrollable-after')) {
    $('#scroll-arrow-wrapper').hide();
  }
};

var showScrollMsg = function() {
  if ($('#intro-svg').hasClass('skrollable-before')) {
    $('#scroll-arrow-wrapper').show();
  }
}
//Reveal 'Pls scroll' on arrow hover
var toggleScrollMsg = function() {
  $('#arrow-wrapper').hover(function() {
    // $(this).css('opacity', 0);
    $('#pls-scroll-wrapper').css('opacity', 1);
    }, function() {
    $(this).css('opacity', 1);
    $('#pls-scroll-wrapper').css('opacity', 0);
  });
};

var skrollLeinsdorf = function() {
  var elementArray = [
    $('#leinsdorf'),
    $('#leinsdorf-i')
    ];
  var scrollDuration = 8;
  setSkrollrAttr(elementArray, scrollDuration);
};

var skrollLeinsdorfDuplicates = function() {
  var elementArray = $('#leinsdorf-duplicates').children();
  var scrollDuration = 0.5;
  setSkrollrAttr(elementArray, scrollDuration);
};
