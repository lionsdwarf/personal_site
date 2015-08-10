//Slide - Tech Stack

var objectifyTech = function(techStack) {
  //generate object, per technology, for handlebars template
  techStack.technologies.forEach(function(tech) {
    var name = tech;
    var dataName = tech.toLowerCase();
    var techObject = {
      name: name,
      data_name: dataName
    };
    var domEl = techStack.dom_el;
    defineObject(techObject, domEl);
  });
};

var defineObject = function(techObject, domEl) {
  //determine appropriate template
  if (domEl === '#tech-stack-left') {
    var template = Handlebars.compile($('#tech-template-left').html()); 
    renderTech(techObject, domEl, template);
  }
  else if (domEl === '#tech-stack-right') {
    var template = Handlebars.compile($('#tech-template-right').html()); 
    renderTech(techObject, domEl, template);
  }
  $('#tech-stack-left').hide();
  $('#tech-stack-right').hide();
};

var renderTech = function(techObject, domEl, template) {
  //compile handlebars template with technology object and append to DOM
  var context = techObject;
  var html = template(context);
  $(domEl).append(html);
};

var showTechStacks = function() {
  $('#tech-stack-left').fadeIn(2500);
  $('#tech-stack-right').fadeIn(2500);
};

var typeStack = function(elementArray) {
  $.each(elementArray, function(i, val) {
    var dataName = val.toLowerCase();
    var domEl = $('#' + dataName + '-typed');
    //Instantiate Typed.js object, per technology
    domEl.typed({
      strings: [val],
      typeSpeed: 20
    });
  });
};

var delayTypeStack = function() {
  if ($('#tech-stack-svg').hasClass('skrollable-after')) {
    typeStack(techStackLeft.technologies);
    typeStack(techStackRight.technologies);
  }
};
