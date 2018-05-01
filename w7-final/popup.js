let msg;
let timest;

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



function getInfo() {
  //get the current time
  timest = new Date();
  console.log("time:" + timest);
  //get the user's message
  msg = document.getElementById("userText").value;
  console.log("new message: " + msg);

  document.getElementById("userText").value = "";

}
