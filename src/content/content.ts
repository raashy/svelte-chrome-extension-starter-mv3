import App from "./Content.svelte";
import css from "../app.css?inline";

// Use shadow dom to avoid conflicts with the page's styles
const useShadowDom = true;
const isDev = import.meta.env.MODE === "production" ? false : true;

// You can name the element whatever you want, like my-extension
const el = document.createElement("div");

// Change if you want to render the content elsewhere
document.documentElement.insertBefore(el, document.body);

if (useShadowDom) {
    const shadowRoot = el.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `<style>${css}</style>`;

    new App({
        target: isDev ? document.getElementById("app") : shadowRoot,
    });
} else {
    new App({
        target: isDev ? document.getElementById("app") : el,
    });
}







