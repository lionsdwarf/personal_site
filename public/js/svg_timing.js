var setSkrollrAttr = function(elementArray, scrollDuration) {
  $.each(elementArray, function(i, val) {
    var element = $(val);
    //At initial scroll position, set stroke-dashoffset equal to element's stroke-dasharray 
    var iDataAttr = 'data-' + App.position + 'p';
    var dashArray = element.css('stroke-dasharray');
    var dashArray = parseInt(dashArray);
    var iDataValue = 'stroke-dashoffset:' + dashArray + ';  ';
    element.attr(iDataAttr, iDataValue);
    //At final scroll position, set stroke-dashoffset to 0
    var finalPosition = App.position + scrollDuration;
    var fDataAttr = 'data-' + finalPosition + 'p';
    element.attr(fDataAttr, 'stroke-dashoffset: 0;');
    //Revise initial scroll position for subsequent skroll
    App.position = finalPosition;
  });
};

var hideSVG = function(elementArray, scrollDuration) {
  $.each(elementArray, function(i, val) {
    
  });
};