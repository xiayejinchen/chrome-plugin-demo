const storage = chrome.storage.local;

const submitButton = document.querySelector('button.submit');
submitButton.addEventListener('click', submitModules);

async function submitModules() {
    let $app = document.getElementById('app');
    let $systype = document.getElementById('systype');
    let val1 = $app.selectedIndex;
    let val2 = $systype.selectedIndex;
    await storage.set({
        css: 100
    });
    const [currentTab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });
    chrome.tabs.sendMessage(currentTab.id, {
        message: "getAPPId"
    }, function(response) {
        console.log(response);
    });
}