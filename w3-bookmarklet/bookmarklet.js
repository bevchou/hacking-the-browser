$(function() {
  console.log('ready for jquery!');

  //set function grow to run every 50 milliseconds
  let interval = setInterval(grow, 10);
  //start at size 0
  let size = 0;
  let sizeTxt;

  //increment 1 pixel at a time
  function grow() {
    size += 1;
    sizeTxt = size + "px";
    //set the size
    setSize();
  }

  //add to the top padding
  function setSize() {
    document.body.style.paddingTop = sizeTxt;
  }

});
