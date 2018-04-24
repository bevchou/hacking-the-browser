console.log('yo');

//start at size 0
let size = 0;
let sizeTxt;
//set function grow to run every 50 milliseconds
let interval = setInterval(grow, 10);

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


//helpful references for you & me
// https://stackoverflow.com/questions/7168362/run-script-each-time-chrome-extension-icon-clicked
// https://developer.chrome.com/extensions/background_pages
// https://developer.chrome.com/extensions/browserAction#event-onClicked
