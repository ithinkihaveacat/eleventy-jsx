import { React } from "./react";

export default ({ children, ...context }: { [k: string]: any }) => {
  return (
    "<!DOCTYPE html>" +
    (
      <html>
        <head>
          <title>{context.title}</title>
        </head>
        <body>{children}</body>
      </html>
    )
  );
};
