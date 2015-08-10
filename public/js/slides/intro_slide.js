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
//hide 'arrow' and 'pls scroll' once skrolling begins
var hideScrollMsg = function() {
  if ($('#arrow-scroll-div').hasClass('skrollable-after')) {
    $('#pls-scroll').hide();
    $('#arrow').hide();
  };
};
//show 'arrow' and 'pls scroll' until skrolling begins
var showScrollMsg = function() {
  if ($('#arrow-scroll-div').hasClass('skrollable-before')) {
    $('#pls-scroll').show();
    $('#arrow').show();
  };
};
//hide the Welcome msg after invisible Welcome skrolls
var hideWelcomeMsg = function() {
  if ($('#welcome-invisible').hasClass('skrollable-after')) {
    $('#welcome-excl-pt').fadeOut(200);
  }
  else if ($('#welcome-invisible').hasClass('skrollable-between')) {
    $('#welcome-excl-pt').fadeIn(200);
  };
};

//Skroll intro div, which triggers hide/show of scroll msg
var skrollIntroDiv = function() {
  var elementArray = [$('#arrow-scroll-div')];
  var scrollDuration = 0.5;
  setSkrollrAttr(elementArray, scrollDuration); 
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

var skrollWelcome = function() {
  var elementArray = $('#welcome-excl-pt').children();
  var scrollDuration = 4;
  setSkrollrAttr(elementArray, scrollDuration);
};

//scroll invisible Welcome message to trigger .hide()
var skrollInvisibleWelcome = function() {
  var elementArray = [$('#welcome-invisible')];
  console.log(elementArray)
  var scrollDuration = 4;
  setSkrollrAttr(elementArray, scrollDuration);
};

