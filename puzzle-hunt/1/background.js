// function callback(details) {
//   details.requestHeaders.push({
//     "name": "accept-language",
//     "value": "de"
//   });
//   return {requestHeaders: details.requestHeaders};
// }
//
// var filter = {
//   urls: ['<all_urls>'],
//   types: ['main_frame']
// };
//
// var extraInfo = ['requestHeaders', 'blocking'];
//
// chrome.webRequest.onBeforeSendHeaders.addListener(
//   callback, filter, extraInfo);


function callback(details) {
  return {
    cancel: true
  };
}

var filter = {
  urls: ['https://*/*quiz-scripts-2.js'],
};

var extraInfo = ['blocking'];

chrome.webRequest.onBeforeRequest.addListener(
  callback, filter, extraInfo);
