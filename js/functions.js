$(document).ready(function(){

  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker({
    disableWeekends: true,
    yearRange: 1
  });
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();


  $('.slider').slider({
    height: 515,
    interval: 6000,
    
  });
  $('.carousel.carousel-slider').carousel({
  });

});