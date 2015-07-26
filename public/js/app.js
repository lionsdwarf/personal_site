$(function(){

  skrollr.init();


  // var waypoint = new Waypoint({
  //   element: document.getElementById('slide-3'),
  //   handler: function() {
  //     typeWebDev();
  //   }
  // });
  
  //Slide - Web projects
  renderProject(projects[0]);
  renderProject(projects[1]);
  renderProject(projects[2]);

  //Slide - Tech stack
  objectifyTech(techStackLeft);
  objectifyTech(techStackRight);  
});

var renderProject = function(projectObject) {
  var template = Handlebars.compile($('#project-template').html()); 
  var context = projectObject;
  var html = template(context);
  var domEl = projectObject.dom_el;
  $(domEl).append(html);
};

var typeTech = function(tech) {
  var dataName = tech.toLowerCase();
  var domEl = $('#' + dataName + '-typed');
  //Instantiate Typed.js object, per technology
  domEl.typed({
    strings: [tech],
    typeSpeed: 20
  });
}

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
    renderTech(techObject, domEl);
  });
};

var renderTech = function(techObject, domEl) {
  //compile handlebars template with technology object and append to DOM
  var template = Handlebars.compile($('#tech-template').html()); 
  var context = techObject;
  var html = template(context);
  $(domEl).append(html);
};