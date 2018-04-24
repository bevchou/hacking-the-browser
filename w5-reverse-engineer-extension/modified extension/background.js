var socialCount = 0;
var allElseCount = 0;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status !== 'complete') {
    return;
  }
  var url = tab.url;
  console.log('visited:', url);

  if (url.indexOf('https://www.facebook.com/') === 0) {
    socialCount++;
  } else if (url.indexOf('https://www.reddit.com/') === 0) {
    socialCount++;
  } else if (url.indexOf('https://twitter.com/') === 0) {
    socialCount++;
  } else if (url.indexOf('https://www.buzzfeed.com/') === 0) {
    socialCount++;
  } else if (url.indexOf('https://www.instagram.com/') === 0) {
    socialCount++;
  } else {
    allElseCount++;
  }

  updateBadge();
});

function updateBadge() {
  var total = socialCount + allElseCount;
  var ratio = allElseCount / total;
  var percentage = Math.round(ratio * 100);
  chrome.browserAction.setBadgeText({
    text: percentage + '%'
  });
  chrome.browserAction.setTitle({
    title: percentage + "% of the " + total + " pages you visted were not social media."
  });

  if (ratio > 0.75) {
    // green
    chrome.browserAction.setBadgeBackgroundColor({
      color: '#397a30'
    });
  } else if (ratio <= 0.75 && ratio >= 0.5) {
    chrome.browserAction.setBadgeBackgroundColor({
      color: '#efa243'
    });
  } else {
    // red
    chrome.browserAction.setBadgeBackgroundColor({
      color: '#af2a0f'
    });
  }
}
