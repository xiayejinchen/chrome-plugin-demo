chrome.webNavigation.onDOMContentLoaded.addListener(async ({
    tabId,
    url
}) => {
    if (url.indexOf('yonyoucloud.com') == -1) return;
    const {
        options
    } = await chrome.storage.local.get('options');
    chrome.scripting.executeScript({
        target: {
            tabId
        },
        files: ['content-script.js'],
        ...options
    });
});