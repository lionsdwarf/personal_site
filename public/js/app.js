App = {
  position: 0
};

$(function(){

  // setTimeout(function() {skrollr.init();}, 300); 
  //Slide - Intro
  skrollSpiralHoles();
  skrollSpiral();
  skrollWebPortfolio();
  skrollByLionsdwarf();
  nextSlide();  
  //Slide - Web projects
  renderProject(projects.art_victim);
  renderProject(projects.jac_soundfactory);
  renderProject(projects.happy_plantr);

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
