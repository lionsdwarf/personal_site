App = {
  position: 1
};

$(function(){

  //Slide - Intro
  showScrollMsg();
  hideElement($('#arrow-scroll-wrapper'), 0.2);
  skrollIntroDiv();
  skrollLeinsdorf();
  skrollWelcome();
  hideElement($('#welcome-excl-pt'), 1);
  skrollLeinsdorfDuplicates();
  finalizeSlide($('#intro-slide'));
  
  //Slide - Web projects
  initializeSlide($('#web-projects-slide'));
  renderProject(projects.art_victim);
  renderProject(projects.jac_soundfactory);
  renderProject(projects.happy_plantr);
  skrollWebDev();
  finalizeSlide($('#web-projects-slide'));

  //Slide - Tech stack
  initializeSlide($('#tech-stack-slide'));
  objectifyTech(techStackLeft);
  objectifyTech(techStackRight);
  showTechStacks();
  finalizeSlide($('#tech-stack-slide'));  
  // typeTech();

  skrollr.init({
    render: function() {
      delayTypeStack();
   }
  });

});
