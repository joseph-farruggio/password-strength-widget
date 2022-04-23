import cssRules from "../dist/styles.css";

const injectCSS = () => {
	var css = cssRules,
		head = document.head || document.getElementsByTagName("head")[0],
		style = document.createElement("style");

	head.appendChild(style);
	style.appendChild(document.createTextNode(css));
};

export default injectCSS;
