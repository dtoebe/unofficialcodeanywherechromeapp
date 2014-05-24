(function() {
	window.onload = setWebview;
	window.onresize = setWebview;
	openExLinks();


	function openExLinks() {
	//Open new browser tab when an external link is clicked
		var webview = document.getElementById('editor');
		webview.addEventListener('newwindow', function(e) {
			window.open(e.targetUrl);
		});
	}

	function setWebview() {
	//auto resize the webview to onResizing of the container window
		var webview = document.querySelector('webview');
		var webviewWidth = document.documentElement.clientWidth;
		//-10 to prevent the bottom bar from going below the window border
		var webviewHeight = document.documentElement.clientHeight - 10;

		webview.style.width = webviewWidth + 'px';
		webview.style.height = webviewHeight + 'px';
	}
})();
