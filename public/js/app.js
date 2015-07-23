$(function(){

  skrollr.init();


  var waypoint = new Waypoint({
    element: document.getElementById('slide-3'),
    handler: function() {
      typeWebDev();
    }
  });


});

var typeWebDev = function() {
  $('#jac-heading').typed({
      strings: ['JAC Soundfactory'],
      typeSpeed: 30
  });
};
