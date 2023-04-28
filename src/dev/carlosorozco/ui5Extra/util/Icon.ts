import IconPool from 'sap/ui/core/IconPool';

/**
 * @public
 */
export interface IconInfo {
  fontFamily: string;
  content: string;
}

/**
 * @namespace dev.carlosorozco.ui5Extra.util.Icon
 * @public
 */
const Icon = {
  /**
   * @public
   */
  getIconInfo(iconName: string) {
    return IconPool.getIconInfo(iconName) as IconInfo;
  }
};

export default Icon;
