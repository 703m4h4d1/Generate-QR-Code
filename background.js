    // Context Menu
    chrome.contextMenus.create({
        "title": "Generate QR Code",
        "contexts": ["all"],
        "onclick": function qr(info, tab) {
            chrome.tabs.create({ url: "https://chart.googleapis.com/chart?cht=qr&chl=" + encodeURIComponent(tab.url) + "&chs=180x180&choe=UTF-8&chld=L|2" });
        }
    });

	// Open official tab
	if(!localStorage["openTab"]) {
		chrome.tabs.create({url: "https://github.com/Arnold-Thomas/Generate-QR-Code"});
		localStorage["openTab"]="done";
	}
	else{
		//Open update tab
		let v = chrome.app.getDetails().version;
		if (v != localStorage.getItem('v')) {
			chrome.tabs.create({url: "https://github.com/Arnold-Thomas/Generate-QR-Code/blob/master/README.md"});
			localStorage.setItem('v', v);
		}		
	}
	