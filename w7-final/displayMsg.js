//get msg data from the background script
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.action == "postmsg") {
    //get the message array
    let incomingMsg = msg.array;
    console.log(msg.array);

    displaySetup();

    //loop through the message array
    for (let i = 0; i < incomingMsg.length; i++) {
      appendPost(incomingMsg[i].time, incomingMsg[i].msg);
    }

  }
});


//add div to where the posts will go
function displaySetup() {
  document.body.innerHTML += '<div id="allMsgs" style="position:absolute;width:200px; top: 100px; left: 20px; background-color:red">TEST HELLO</div>';
}

//add posts to the #allMsgs div
function appendPost(time, msgText) {



  $("#allMsgs").append(postHTML);
}
