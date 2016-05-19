// creates carousel

$(document).ready(function(){
  $('.main-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true
  });
});

$('ul.nav li.dropdown').hover(function() {
  $(this).addClass('.open');
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});


$(document).ready(function() {
    $('#map').usmap({
      stateStyles: {fill: '#4ECDC4'},
      stateHoverStyles: {fill: 'red'},
      showLabels: true,
      click: function(event, data) {
        $('#clicked-state')
          .text('You clicked: '+data.name)
          .parent().effect('highlight', {color: '#C7F464'}, 2000);
      }
    });
  });
