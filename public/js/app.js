  $(function(){

    $('#lionsdwarf').hide();

    setTimeout(function() { flicker() }, 2000);
    setTimeout(function() { typeWebDev() }, 4000);
    setTimeout(function() { typePhotograpy() }, 5000);
    setTimeout(function() { typeContactInfo() }, 6000);
    
    setTimeout(function() {insertArtVictim() }, 7000);
    setTimeout(function() {insertJAC() }, 7500);
    setTimeout(function() {insertHappyPlantr() }, 8000);

  });

  var flicker = function() {
    // var toggleBackground = 
      // setInterval(function() {$('#background').toggleClass('invert')}, 333);
    var showText = setInterval(function() {$('#lionsdwarf').fadeIn(2000)}, 333);
    // var invertText = setInterval(function() {$('#lionsdwarf').toggleClass('invert')}, 333);
    // setTimeout(function() {clearInterval(toggleBackground)}, 700);
    // setTimeout(function() {clearInterval(showText)}, 700);
    // setTimeout(function() {clearInterval(invertText)}, 700);
    setTimeout(function() {($('#background').addClass('invert'))}, 700);
    setTimeout(function() {($('#lionsdwarf').addClass('invert'))}, 700);
  };

  var typeWebDev = function() {
    $('#development').typed({
        strings: ['DEVELOPMENT'],
        typeSpeed: 30
    });
  };

  var typePhotograpy = function() {
    $('#photography').typed({
        strings: ['PHOTOGRAPHY'],
        typeSpeed: 30
    });
  };

  var typeContactInfo = function() {
    $('#contact').typed({
        strings: ['CONTACT'],
        typeSpeed: 30
    });
  };

  var insertArtVictim = function() {
    var template = Handlebars.compile($('#dev-project-template').html()); 
    var context = {title: 'Art Victim', url: 'assets/av_preview_sq.png'}
    var html = template(context);
    $('#dev-project-1').append(html);
  };

  var insertJAC = function() {
    var template = Handlebars.compile($('#dev-project-template').html()); 
    var context = {title: 'JAC SoundFactory', url: 'assets/jac_preview_sq.png'}
    var html = template(context);
    $('#dev-project-2').append(html);
  };

  var insertHappyPlantr = function() {
    var template = Handlebars.compile($('#dev-project-template').html()); 
    var context = {title: 'Happy Plant.r', url: 'assets/hp_preview_sq.png'}
    var html = template(context);
    $('#dev-project-3').append(html);
  };