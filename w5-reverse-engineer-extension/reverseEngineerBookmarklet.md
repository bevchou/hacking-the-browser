## Reverse Engineering a Chrome Extension

I decided to reverse engineer a simple Chrome extension called [Color Tab](https://chrome.google.com/webstore/detail/color-tab/hchlgfaicmddilenlflajnmomalehbom?hl=en) that shows you a new color palette whenever you open a new tab. It seems simple and I hoped that I could understand how to make changes to Chrome's new tab page.  

I started by looking at the manifest.json file. For the most part, it looks pretty standard, except a few things.

* What is the "update_url"?
* What is "chrome_url_overrides"?

```
{
"update_url": "https://clients2.google.com/service/update2/crx",

  "manifest_version": 2,

  "name": "Color Tab",
  "description": "A Beautiful Color Palette With Every New Tab!",
  "version": "1.6",

  "browser_action": {
    "default_icon": "icon.png"
  },
 "chrome_url_overrides": {
    "newtab": "popup.html"
  },
      "background": {
    "scripts": ["bg.js"]
  }
}
```

I [looked this up on Stack Overflow](https://stackoverflow.com/questions/22735525/install-chrome-extension-through-windows-registry), and it is used when you want your extension to be installed through the Windows registry. It's not super relevant to the extension's function, but it's good to know if you want your extension to work for as many users as possible.

The ["chrome_url_overrides"](https://developer.chrome.com/extensions/override) is used to redirect the new tab to a different page. So in this case, instead of going to the standard URL - "chrome://newtab" - it will take you to "popup.html".

Looking at "popup.html", there is only some basic styling for an iframe to fill the entire browser window. And the iframe takes you to another URL, "http://colorhunt.co/tab.php". When you go to that URL it shows the colorful page that should be in the new tab. The HTML source code appears to show some CSS styling for the animation and placement of the color blocks. There is also a long data array, which I am assuming is where the color values are stored.

```
<!doctype html>
<html>
  <head>
    <title>New Tab</title>
    <style>
      window { overflow:hidden }
      body { margin: 0; overflow:hidden }
      iframe { width:100vw; height:100vh; border:0; overflow:hidden; margin:0; padding:0; }
    </style>
  </head>
  <body>
    <iframe src="http://colorhunt.co/tab.php"></iframe>
  </body>
</html>
```

Now, I'll look at the background script that is making everything happen. As we've seen before, there it is using the browser action API that gets triggered when the user clicks on the extension icon. Then it looks like, it uses the tabs API to open a new window showing the "popup.html" site.

```
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('popup.html')}, function(tab) {
    // Tab opened.
  });
});

```

The only things left to look at is the "popup.js" file. It's not included in the manifest file, so I don't think it contributes to the function of the extension. The code appears to be querying google image search. I'm not sure why this was included in the chrome extension's files since it does not seem to be used by the extension.

Overall, it seems like a good way to make a different landing page for new tabs. It's cool that you could make you own website, change it whenever and however you like, and then have the Chrome extension user see new things. It seems pretty popular, so it's nice to see that you can delight people with simple projects.
