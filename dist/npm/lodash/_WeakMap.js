"use strict";

var getNative = require("./_getNative.js"),
    root = require("./_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;