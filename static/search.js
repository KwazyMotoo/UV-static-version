"use strict";

/**

@param {string} input
@param {string} template Template for a search query.
@returns {string} Fully qualified URL
*/
function search(input, template) {
let url;
try {
url = new URL(input);
// input is a valid URL:
// eg: https://example.com, https://example.com/test?q=param
return url.toString();
} catch (err) {
// input was not a valid URL
}
try {
url = new URL(http://${input});
// input is a valid URL when http:// is added to the start:
// eg: example.com, https://example.com/test?q=param
if (url.hostname.includes(".")) return url.toString();
} catch (err) {
// input was not a valid URL
}

// input may have been a valid URL, however the hostname was invalid

// Attempts to convert the input to a fully qualified URL have failed
// Treat the input as a search query
return template.replace("%s", encodeURIComponent(input));
}
