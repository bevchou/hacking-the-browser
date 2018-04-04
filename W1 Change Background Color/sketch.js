let bgYellow = false;

$(function() {
  console.log( 'ready for jquery!' );

  //select button
  $('button').click(function(event) {
    console.log('change the background color!');
    if (!bgYellow){
      $('body').css('background-color', 'yellow');
      bgYellow = !bgYellow;
    } else {
      $('body').css('background-color', 'white');
      bgYellow = !bgYellow;
    }

  })
});
