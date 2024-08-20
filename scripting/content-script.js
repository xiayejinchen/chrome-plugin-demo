// 调用的函数
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "getAPPId") {
        let appId = localStorage.getItem('curAppId');
        chrome.storage.local.get('css', function(v) {

        })
        sendResponse({
            appId: appId,
            css: v.css
        });
    }
});