/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface ScopedCss {
    'greeting': string;
  }
  interface ShadowCss {
    'message': string;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLScopedCssElement extends Components.ScopedCss, HTMLStencilElement {}
  var HTMLScopedCssElement: {
    prototype: HTMLScopedCssElement;
    new (): HTMLScopedCssElement;
  };

  interface HTMLShadowCssElement extends Components.ShadowCss, HTMLStencilElement {}
  var HTMLShadowCssElement: {
    prototype: HTMLShadowCssElement;
    new (): HTMLShadowCssElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'scoped-css': HTMLScopedCssElement;
    'shadow-css': HTMLShadowCssElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface ScopedCss extends JSXBase.HTMLAttributes<HTMLScopedCssElement> {
    'greeting'?: string;
  }
  interface ShadowCss extends JSXBase.HTMLAttributes<HTMLShadowCssElement> {
    'message'?: string;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'scoped-css': ScopedCss;
    'shadow-css': ShadowCss;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

