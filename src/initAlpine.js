import widgetAlpine from "alpinejs";
import widgetHTML from "./../widget.html";

const initAlpine = () => {
	// widgetAlpine.data("widget", widget);
	document.addEventListener("DOMContentLoaded", function () {
		if (!window.Alpine) {
			window.widgetAlpine = widgetAlpine;
			widgetAlpine.start();
		}
	});

	document.getElementById("app").innerHTML = widgetHTML;
};

export default initAlpine;
