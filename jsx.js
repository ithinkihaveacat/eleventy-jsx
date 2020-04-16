"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const h = require("vhtml");
exports.React = {
    createElement: h,
    Fragment: ({ children }) => h(null, null, ...children),
};
