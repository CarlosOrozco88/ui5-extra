declare module 'dev/carlosorozco/ui5Extra/util/Icon' {
  /**
   * @static
   * @namespace dev.carlosorozco.ui5Extra
   */
  namespace Icon {
    export function getIconInfo(iconName: string): IconInfo;
  }
  export default Icon;

  export interface IconInfo {
    fontFamily: string;
    content: string;
  }
}
