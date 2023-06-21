// The content wrapper is a workaround as you cannot import es6 modules in a content script.

(async () => {
  const src = chrome.runtime.getURL("./content.js");
  const contentScript = await import(src);
})();
