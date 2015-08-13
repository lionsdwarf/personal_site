//Slide - Web projects

var renderProject = function(projectObject) {
  var template = Handlebars.compile($('#project-template').html()); 
  var context = projectObject;
  var html = template(context);
  var domEl = projectObject.dom_el;
  $(domEl).append(html);
};

var skrollWebDev = function() {
  var elementArray = $('#web-dev-svg').children();
  var scrollDuration = 15;
  skrollSVG(elementArray, scrollDuration);
};
