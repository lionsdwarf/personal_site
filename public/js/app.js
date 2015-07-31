App = {
  position: 0
};

$(function(){

  //Slide - Intro
  skrollSpiralHoles();
  skrollSpiral();
  skrollWebPortfolio();
  skrollByLionsdwarf();
  skrollLionsdwarfDuplicates();
  slideFinalization($('#intro-slide'));
  
  //Slide - Web projects
  slideInitialization($('#web-projects-slide'));
  renderProject(projects.art_victim);
  renderProject(projects.jac_soundfactory);
  renderProject(projects.happy_plantr);
  slideFinalization($('#web-projects-slide'));

  //Slide - Tech stack
  objectifyTech(techStackLeft);
  objectifyTech(techStackRight);
  showTechStacks();  
  // typeTech();

  skrollr.init();
  
  var waypoint = new Waypoint({
    element: document.getElementById('slide-4'),
    handler: function() {
      typeTech('Node');
    },
    offset: '-650%'
  });

  var waypoint = new Waypoint({
    element: document.getElementById('slide-4'),
    handler: function() {
      typeTech('jQuery');
    },
    offset: '-680%'
  });

});
