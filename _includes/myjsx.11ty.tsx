import { React } from "../react";

import Page from "../Page";

module.exports = function (context: any) {
  // context.content is the "body" of demo.md (converted to HTML). To use it
  // within TSX/JSX we need to convert it into a Fragment.
  const content = React.createElement(null, {
    dangerouslySetInnerHTML: { __html: context.content },
  });
  return <Page {...context}>{content}</Page>;
};
