"use strict";

function search(input, template) {
const tryURL = (url) => {
try {
return new URL(url).toString();
} catch (err) {
return null;
}
};

const inputURL = tryURL(input);
if (inputURL) {
return inputURL;
}

const inputWithHTTP = http://${input};
const httpURL = tryURL(inputWithHTTP);
if (httpURL && httpURL.includes(".")) {
return httpURL;
}

return template.replace("%s", encodeURIComponent(input));
}
