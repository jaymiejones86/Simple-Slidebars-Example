(function($) {
  $(function() {
    var mySlidebars = new $.slidebars({
      siteClose: true
    });
    $('.my-button').on('click', function() {
      mySlidebars.slidebars.open('left');
    });
  });
}) (jQuery);
