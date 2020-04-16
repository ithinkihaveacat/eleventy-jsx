"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("../react");
const Page_1 = require("../Page");
module.exports = function (context) {
    // context.content is the "body" of demo.md (converted to HTML). To use it
    // within TSX/JSX we need to convert it into a Fragment.
    const content = react_1.React.createElement(null, {
        dangerouslySetInnerHTML: { __html: context.content },
    });
    return react_1.React.createElement(Page_1.default, Object.assign({}, context), content);
};
