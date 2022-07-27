window.addEventListener('contextmenu', () => {
    const selectedText = window.getSelection().toString()
    chrome.runtime.sendMessage({selection: selectedText});
});