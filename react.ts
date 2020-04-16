import h = require("vhtml");

export const React = {
  createElement: h,
  Fragment: ({ children }: { children: string[] }) =>
    h(null, null, ...children),
};
