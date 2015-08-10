//Slide - Web projects

var renderProject = function(projectObject) {
  var template = Handlebars.compile($('#project-template').html()); 
  var context = projectObject;
  var html = template(context);
  var domEl = projectObject.dom_el;
  $(domEl).append(html);
};
