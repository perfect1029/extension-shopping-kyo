document.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById("switch").checked, "before")
    document.getElementById('switch').addEventListener('change', () => {
        console.log(document.getElementById("switch").checked, "after")
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            if (document.getElementById("switch").checked) {
                chrome.tabs.sendMessage(activeTab.id, { action: 'getSourceCode' }, (response) => {
                });
            } else {
                chrome.tabs.sendMessage(activeTab.id, { action: 'stopGetSourceCode' }, (response) => {
                });
            }
        })
    });
    document.getElementById('checkout').addEventListener('click', () => {
        chrome.tabs.query({active:true, currentWindow: true}, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {action: "checkOut"}, (response) => {
                
            })
        })
    })
});
