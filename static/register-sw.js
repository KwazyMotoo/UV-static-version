
"use strict";
const stockSW = "/static/uv-sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];

async function registerSW() {
const { protocol, hostname } = location;

if (protocol !== "https:" && !swAllowedHostnames.includes(hostname)) {
throw new Error("Service workers cannot be registered without https.");
}

if (!navigator.serviceWorker) {
throw new Error("Your browser doesn't support service workers.");
}

await navigator.serviceWorker.register(stockSW, {
scope: __uv$config.prefix,
});
}
