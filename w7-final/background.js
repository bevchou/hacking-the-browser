//listen for messages from popup.js
chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
  //got time and message data
  console.log("message received!");
  console.log(data);
  //get URL
  chrome.tabs.getSelected(null, function(tab) {
      console.log(tab.url);
  });
});



//THIS IS BASED OFF OF CORY FORSYTH'S FIREBASE CLICKS CHROME EXTENSION FROM THE HACKING THE BROWSER CLASS AT ITP NYU

console.log("beverly htb - background.js");

// Initialize Firebase
//this is beverly's firebase API
var config = {
  apiKey: "AIzaSyDMFt6RHI2Bp3yWyN-AzyAw3c_TiCTEP1o",
  authDomain: "hacking-browser-final.firebaseapp.com",
  databaseURL: "https://hacking-browser-final.firebaseio.com",
  projectId: "hacking-browser-final",
  storageBucket: "hacking-browser-final.appspot.com",
  messagingSenderId: "770585640212"
};


// The "firebase" variable is provided by the "firebase.js" script, which should
// have been listed in the manifest.json so that it loads before this script.
firebase.initializeApp(config);

// Learn more about the Firebase JavaScript API
// at this url: https://firebase.google.com/docs/database/web/read-and-write

// start listening for changes to clickCount, and
// update the badge whenever the count changes





// console.log("Adding Firebase listener");
// var database = firebase.database();
// var ref = database.ref("clickCount");
// ref.on("value", function(snapshot) {
//   var clickCount = snapshot.val();
//   console.log("Value of clickCount changed to:", clickCount);
//
//   // setBadgeText requires a "string" property, not a number,
//   // so convert the clickCount into a string:
//   var clickCountString = "" + clickCount;
//   chrome.browserAction.setBadgeText({ text: clickCountString });
// });
//
// // Add a click listener for the browser action. Increment
// // the clickCount each time anyone clicks their browser action.
// chrome.browserAction.onClicked.addListener(function() {
//   console.log("Clicked browser action");
//
//   var database = firebase.database();
//   var ref = database.ref("clickCount");
//
//   // Read the most-recent clickCount value once...
//   ref.once("value").then(function(snapshot) {
//     var clickCount = snapshot.val();
//
//     // ... and then increment that value
//     ref.set(clickCount + 1);
//   });
// });
