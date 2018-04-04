
$(function() {
  console.log('ready for jquery!');

  //if window is resized
  $(window).resize(function() {
    //delete text and intro gif
    $('#start').remove();
    //calculate window ratio
    let windowRatio = window.innerWidth / window.innerHeight;
    //if window is wide
    if (windowRatio >= 2) {
      console.log("W I D E B O Y E")
      //determine images shown based on size
      if (window.innerHeight >= 300) {
        newCat('img/wide/widestwideboye.jpg');
      } else if (window.innerHeight < 300 && window.innerHeight > 200) {
        newCat('img/wide/wideboye.jpg');
      } else if (window.innerHeight <= 200 && windowRatio > 3.4) {
        newCat('img/wide/thinwideboye.jpg');
      }
      //if window is tall
    } else if (windowRatio < 0.45) {
      console.log("T A L L B O Y E")
      newCat('/img/tall/longboye.jpg');
      if (window.innerWidth < 300 && windowRatio < 0.25) {
        newCat('/img/tall/reallytallboye.jpg');
      }
      //if window is square-ish but wide
    } else if (windowRatio < 2 && windowRatio >= 0.9) {
      console.log("midsize wide!");
      if (window.innerHeight >= 1000) {
        newCat('img/full/spaceboye.jpg');
      } else if (window.innerHeight < 1000 && window.innerHeight > 800) {
        newCat('img/full/cozycat.jpg');
      } else if (window.innerHeight <= 800 && window.innerHeight > 600) {
        newCat('img/full/smooshycat.jpg');
      } else if (window.innerHeight <= 600 && window.innerHeight > 500) {
        newCat('img/full/bigboxcat.jpg');
      } else if (window.innerHeight <= 500 && window.innerHeight > 400) {
        newCat('img/medium/curlycat.jpg');
      } else if (window.innerHeight <= 400 && window.innerHeight > 350) {
        newCat('img/medium/closeupcat.jpg');
      } else if (window.innerHeight <= 350 && window.innerHeight > 300) {
        newCat('img/medium/stretchcat.jpg');
      } else if (window.innerHeight <= 300 && window.innerHeight > 250) {
        newCat('img/small/bbycat.jpg');
      } else if (window.innerHeight <= 250 && window.innerHeight > 200) {
        newCat('img/small/compressboye.jpg');
      } else if (window.innerHeight <= 200 && window.innerHeight > 150) {
        newCat('img/tiny/boxboye.jpg');
      } else if (window.innerHeight <= 150) {
        newCat('img/tiny/smoosh.jpg');
      }
      //if window is square-ish but tall
    } else if (windowRatio >= .45 && windowRatio < 0.9) {
      console.log("midside tall!");
      if (window.innerWidth >= 1000) {
        newCat('img/full/spaceboye.jpg');
      } else if (window.innerWidth <= 450 && window.innerWidth > 350){
        newCat('img/small/slipperycat.jpg');
      } else if (window.innerWidth <= 350 && window.innerWidth > 250){
        newCat('img/small/smooshed.jpg');
      } else if (window.innerWidth <= 250 && window.innerWidth > 150){
        newCat('img/tiny/tinylongkitties.jpg');
      } else if (window.innerWidth <= 150){
        newCat('img/tiny/rotatecat.gif');
      }
    }

  });

});


function newCat(url) {
  $('#cat').attr('src', url);
}

// function fillWidth() {
//   $('#cat').css({
//     'width': '100vw',
//     'height': ''
//   });
// }
//
// function fillHeight() {
//   $('#cat').css({
//     'width': '',
//     'height': '100vh'
//   });
// }
