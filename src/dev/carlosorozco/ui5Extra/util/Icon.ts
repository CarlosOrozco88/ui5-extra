import IconPool from 'sap/ui/core/IconPool';

/**
 * @namespace dev.carlosorozco.ui5Extra.util.Icon
 */
interface IconInfo {
  fontFamily: string;
  content: string;
}
export default {
  getIconInfo(iconName: string) {
    return IconPool.getIconInfo(iconName) as IconInfo;
  }
};
