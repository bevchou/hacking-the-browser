let currentURL;
let currentTime;
let currentMsg;

//THIS IS BASED OFF OF CORY FORSYTH'S FIREBASE CLICKS CHROME EXTENSION FROM THE HACKING THE BROWSER CLASS AT ITP NYU

console.log("beverly htb - background.js");

//this is beverly's firebase API
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDMFt6RHI2Bp3yWyN-AzyAw3c_TiCTEP1o",
  authDomain: "hacking-browser-final.firebaseapp.com",
  databaseURL: "https://hacking-browser-final.firebaseio.com",
  projectId: "hacking-browser-final",
  storageBucket: "hacking-browser-final.appspot.com",
  messagingSenderId: "770585640212"
};
// Initialize Firebase
firebase.initializeApp(config);

// The "firebase" variable is provided by the "firebase.js" script, which should
// have been listed in the manifest.json so that it loads before this script.
var database = firebase.database();
var ref = database.ref("test");
ref.on("value", function(snapshot) {
  let newSite = snapshot.val();
});

// Learn more about the Firebase JavaScript API
// at this url: https://firebase.google.com/docs/database/web/read-and-write


//listen for messages from popup.js
chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
  //got time and message data
  console.log("message received!");
  currentTime = data.time;
  currentMsg = data.msg;
  console.log(currentTime);
  console.log(currentMsg);
  //get URL of selected tab
  chrome.tabs.getSelected(null, function(tab) {
    currentURL = tab.url;
    console.log(currentURL);
    //put all the data into a JSON
    let newData = {
      time: currentTime,
      msg: currentMsg,
      site: currentURL
    };
    console.log(newData);
    //push to firebase
    var database = firebase.database();
    var ref = database.ref("test");
    ref.push(newData);
    // ref.once("value").then(function(snapshot) {
    //   let newSite = snapshot.val();
    //   console.log(newSite);
    //   ref.set(currentURL);
    // });
  });



});

//get active URL of website
//query this url in the firebase database
//post the data to the website in text boxes (divs)


//get the tab the user is on
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status !== 'complete') {
    return;
  }
  var activeURL = tab.url;
  console.log('now on this site: ' + activeURL);

  var ref = firebase.database().ref("test");
  ref.orderByChild("site").equalTo(activeURL).on("child_added", function(snapshot) {
    console.log(snapshot.key);
  });

});









function postToSite() {

}
