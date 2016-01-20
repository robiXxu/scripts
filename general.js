// MIDDLE CLICK MENU SPAWNER
//at mouse position
//check codepen for menu designs..
$(window).on('mousedown', function(e) { 
   if( e.which == 2 ) {
      e.preventDefault();
      console.log(e);
   }
});

