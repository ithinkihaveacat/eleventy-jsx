"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("./react");
exports.default = ({ children, ...context }) => {
    return ("<!DOCTYPE html>" +
        (react_1.React.createElement("html", null,
            react_1.React.createElement("head", null,
                react_1.React.createElement("title", null, context.title)),
            react_1.React.createElement("body", null, children))));
};
