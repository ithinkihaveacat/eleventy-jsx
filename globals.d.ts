declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "vhtml" {
  function h(
    name: string | null,
    attrs: { [k: string]: string | { __html: string } } | null,
    ...children: string[]
  ): string;

  export = h;
}
