chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "crowdsec",
      "title": 'Search "%s" in CrowdSec CTI',
      "contexts": ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((itemData) => {
  if(itemData.menuItemId != "crowdsec"){
    return
  }
  chrome.tabs.create({'url': "https://app.crowdsec.net/cti/" + itemData.selectionText.trim()}, (tab) => {});
});