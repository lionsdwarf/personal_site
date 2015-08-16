App = {
  position: 1
};

$(function(){

  //Slide - About me
  hideElement($('#about-me'), 8);

  //Slide - Intro
  showScrollMsg();
  hideElement($('#arrow-scroll-wrapper'), 0.2);
  // skrollIntroDiv();
  skrollLeinsdorf();
  skrollDotNYC();
  skrollWelcome();
  hideElement($('#dot-nyc'), 1);
  hideElement($('#welcome-excl-pt'), 1);
  skrollLeinsdorfDuplicates();
  finalizeSlide($('#intro-slide'));
  
  //Slide - Web projects
  initializeSlide($('#web-projects-slide'));
  renderCSProject(projects.future_type);
  renderProject(projects.art_victim);
  renderProject(projects.jac_soundfactory);
  renderProject(projects.happy_plantr);
  skrollWebDev();
  finalizeSlide($('#web-projects-slide'));

  //Slide - Tech stack
  initializeSlide($('#tech-stack-slide'));
  skrollTekStak();
  skrollInvisibleDiv();
  skrollGap(30);
  objectifyTech(techStackLeft);
  objectifyTech(techStackRight);
  showTechStacks();
  finalizeSlide($('#tech-stack-slide'));  

  //Slide - Mission contact
  initializeSlide($('#mission-contact-slide'));
  renderEmail();
  skrollAbout();
  endSkrollr($('#mission-contact-slide'));

  skrollr.init({
    render: function() {
      typeStacks();
   }
  });
});
