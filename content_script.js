window.addEventListener('mouseup', (e) => {
    const selectedText = window.getSelection().toString()
    chrome.runtime.sendMessage({selection: selectedText});
});