//Reveal 'Pls scroll' on arrow hover
var showScrollMsg = function() {
  $('#arrow-wrapper').hover(function() {
    // $(this).css('opacity', 0);
    $('#pls-scroll-wrapper').css('opacity', 1);
    }, function() {
    $(this).css('opacity', 1);
    $('#pls-scroll-wrapper').css('opacity', 0);
  });
};

//skroll visible svgs
var skrollLeinsdorf = function() {
  var elementArray = [
    $('#leinsdorf'),
    $('#leinsdorf-i')
    ];
  var scrollDuration = 8;
  skrollSVG(elementArray, scrollDuration);
};

var skrollLeinsdorfDuplicates = function() {
  var elementArray = $('#leinsdorf-duplicates').children();
  var scrollDuration = 0.5;
  skrollSVG(elementArray, scrollDuration);
};

var skrollWelcome = function() {
  var elementArray = $('#welcome-excl-pt').children();
  var scrollDuration = 4;
  skrollSVG(elementArray, scrollDuration);
};

//scroll invisible Welcome message to trigger .hide()
var skrollInvisibleWelcome = function() {
  var elementArray = [$('#welcome-invisible')];
  var scrollDuration = 4;
  skrollSVG(elementArray, scrollDuration);
};

//Skroll invisible intro div, which triggers hide/show of scroll msg
var skrollIntroDiv = function() {
  var elementArray = [$('#arrow-scroll-div')];
  var scrollDuration = 0.5;
  skrollSVG(elementArray, scrollDuration); 
};
