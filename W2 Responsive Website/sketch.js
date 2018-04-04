let bigCats = ["bigboxcat.jpg", "smooshycat.jpg", "spaceboye.jpg"];


let bools = [];
let boolName = ["full", "medium", "small", "tiny", "wide", "tall"];

$(function() {
  console.log('ready for jquery!');

  //booleans --- as follows
  //full, medium, small, tiny, wide, tall
  for (let i = 0; i < 6; i++) {
    bools.push(false);
  }


  // bigCats = makeURL(bigCats, "full");
  // $('body').css('background-image', bigCats[2]);


  //if window is resized
  $(window).resize(function() {
    //delete text and intro gif
    $('#start').remove();
    //calculate window ratio
    let windowRatio = window.innerWidth / window.innerHeight;
    //if window is wide
    if (windowRatio > 2) {
      console.log("W I D E B O Y E")
      fillWidth();
      if (window.innerHeight >= 300) {
        newCat('/img/wide/widestwideboye.jpg');
      } else if (window.innerHeight < 300 && window.innerHeight > 150) {
        newCat('/img/wide/wideboye.jpg');
      } else if (window.innerHeight <= 150 && windowRatio > 3.4) {
        newCat('img/wide/thinwideboye.jpg');
      }
      //if window is tall
    } else if (windowRatio < 0.45) {
      console.log("T A L L B O Y E")
      fillHeight();
      newCat('/img/tall/longboye.jpg');
      if (window.innerWidth < 300 && windowRatio < 0.25) {
        newCat('/img/tall/reallytallboye.jpg');
      }

    }

  });

});




function newCat(url) {
  $('#cat').attr('src', url);
}

function fillWidth() {
  $('#cat').css({
    'width': '100vw',
    'height': ''
  });
}

function fillHeight() {
  $('#cat').css({
    'width': '',
    'height': '100vh'
  });
}
