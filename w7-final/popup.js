let userMsg;
let timeStr;

//execute when the user clicks submit
document.getElementById("submit").addEventListener("click", function() {
  console.log("submit button clicked!");
  getInfo();

});

//execute when the user hits enter
document.getElementById("userText").onkeypress = function(e) {
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == "13"){
    console.log("enter key pressed!");
    getInfo();
    return false;
  }
}

//get info from the popup.html window
function getInfo() {
  //get the current time
  let timestamp = new Date().getTime() / 1000;
  timeStr = convertDate(timestamp);
  //get the user's message
  userMsg = document.getElementById("userText").value;
  //make JSON
  let newNote = {
    time: timeStr,
    msg: userMsg
  }
  //console log JSON
  console.log(newNote);
  //send to background.js
  chrome.runtime.sendMessage(newNote);
  //clear the input field
  document.getElementById("userText").value = "";
}

//convert to date & time
function convertDate(epochdate) {
  let myDate = new Date(epochdate * 1000);
  return myDate.toLocaleString();
}
