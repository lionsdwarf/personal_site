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
  finalizeSlide($('#intro-slide'));
  
  //Slide - Web projects
  initializeSlide($('#web-projects-slide'));
  renderProject(projects.art_victim);
  renderProject(projects.jac_soundfactory);
  renderProject(projects.happy_plantr);
  finalizeSlide($('#web-projects-slide'));

  //Slide - Tech stack
  initializeSlide($('#tech-stack-slide'));
  objectifyTech(techStackLeft);
  objectifyTech(techStackRight);
  showTechStacks();
  skrollWelcome();
  finalizeSlide($('#tech-stack-slide'));  
  // typeTech();

  skrollr.init({
    render: function() {
      if ($('#tech-stack-svg').hasClass('skrollable-after')) {
        typeStack(techStackLeft.technologies);
        typeStack(techStackRight.technologies);
      }
    }
  });

});
