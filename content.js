var timeout;
function sendSourceCode() {
    const check_button = document.querySelector('.table-striped > tbody > tr > td > input'); // Replace with your button's class or selector
    if (document.querySelectorAll("#itemsBody > tr").length > 1) {
        check_button.click();
        if (check_button.checked) {
            const cart_button = document.querySelector('.batchAddDiv > button');
            cart_button.click();
            const newStyleElement = document.createElement("a");
            newStyleElement.className = "d-none";
            newStyleElement.innerHTML = "cart";
            newStyleElement.id = "checkout";
            newStyleElement.setAttribute("href", "https://bclub.cm/cart/process/");
            newStyleElement.setAttribute("target", "_blank ");
            document.querySelector('.batchAddDiv').appendChild(newStyleElement);
        } else {
            check_button.click();
        }
    } else {
        document.getElementById("makeSearch").click();
        timeout = setTimeout(sendSourceCode, 50)
    }


}
// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'getSourceCode') {
        sendSourceCode();
    }
    if(msg.action == "stopGetSourceCode") {
        clearTimeout(timeout);
    }
    if(msg.action == "checkOut") {
        document.getElementById("checkout").click();
    }
});
