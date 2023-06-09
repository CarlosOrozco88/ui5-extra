import { State } from './library';
import ManagedObject from 'sap/ui/base/ManagedObject';
import IconPool from 'sap/ui/core/IconPool';
import { IconInfo } from 'ui5Extra/Toast/IconInfo';

const NOTIFICATIONS_ID = 'ui5Extra-notifications';
const MIN_DURATION = 1000;

/**
 * @namespace ui5Extra.Toast
 */
export default class Popup extends ManagedObject {
  constructor(id?: string | $PopupSettings);
  constructor(id?: string, settings?: $PopupSettings);
  constructor(id?: string, settings?: $PopupSettings) {
    super(id, settings);
  }

  /** @private */
  static readonly metadata: object = {
    library: 'ui5Extra.Toast',
    properties: {
      /** Title for the Popup */
      title: {
        type: 'string',
        group: 'Appearance',
        defaultValue: ''
      },
      /** Message for the Popup */
      text: {
        type: 'string',
        group: 'Appearance',
        defaultValue: ''
      },
      /** Max lines for message (integer) */
      maxLines: {
        type: 'int',
        group: 'Appearance',
        defaultValue: 3
      },
      /** Popup duration in milliseconds */
      duration: {
        type: 'int',
        group: 'Appearance',
        defaultValue: 3000
      },
      /** State of the Popup. Changes the color and icon */
      state: {
        type: 'ui5Extra.Toast.State',
        group: 'Misc',
        defaultValue: State.None
      },
      /** Show or not the loader bar */
      showLoadBar: {
        type: 'boolean',
        group: 'Appearance',
        defaultValue: true
      },
      /** Show or not the close button. If duration is 0, this property has no effect */
      showClose: {
        type: 'boolean',
        group: 'Appearance',
        defaultValue: true
      },
      /** Icon for the Popup. It overwrites the State icon */
      icon: { type: 'sap.ui.core.URI', group: 'Data', defaultValue: null },
      /** Icon for the close button */
      iconClose: { type: 'sap.ui.core.URI', group: 'Data', defaultValue: 'sap-icon://decline' }
    },
    events: {
      onClose: {}
    }
  };

  private oContent?: HTMLLIElement;

  private resolver?: (value?: unknown) => unknown;

  private _closeTimeout?: ReturnType<typeof setTimeout>;

  async show() {
    const oPopup = this.createPopup();
    this.setContent(oPopup);

    const oULArea = this.createULArea();

    const oContent = this.getContent();
    if (!oContent) throw Error('No static area created');
    oULArea.append(oContent);

    await this.wait();
    oPopup.classList.add('show');
    this.autoClose();

    await new Promise((resolve) => {
      this.resolver = resolve;
    });
  }

  autoClose() {
    const duration = this.getDuration();
    if (duration <= 0) return;

    this._closeTimeout = setTimeout(() => {
      this.close();
    }, duration || 3000);
  }

  async close() {
    const oPopup = this.getContent();
    if (!oPopup) return;

    oPopup.classList.add('hide');
    oPopup.classList.remove('show');

    await this.wait(250);

    if (this.resolver) {
      this.fireOnClose();
      this.resolver();
    }

    clearTimeout(this._closeTimeout);
    oPopup.remove();
    this.destroy(true);

    this.cleanULArea();
  }

  createPopup() {
    const state = this.getState();

    const oPopup = document.createElement('li');
    oPopup.classList.add('Popup');
    oPopup.classList.add(`state-${state.toLowerCase()}`);

    const sIcon = this.createIcon();
    if (sIcon) {
      oPopup.classList.add('show-icon');
      oPopup.append(sIcon);
    }

    const oBody = this.createBody();
    oPopup.append(oBody);

    const oProgress = this.createProgress();
    if (oProgress) oPopup.append(oProgress);

    const oClose = this.createClose();
    if (oClose) {
      oPopup.classList.add('show-close');
      oPopup.append(oClose);
    }

    return oPopup;
  }

  createIcon() {
    let oIcon;
    const sState = this.getState();

    const iconState = sState !== State.None ? `message-${sState.toLowerCase()}` : '';
    const icon = this.getIcon() || iconState;

    if (icon) {
      oIcon = document.createElement('span');
      oIcon.classList.add('Icon');
      oIcon.classList.add('sapUiIcon');

      const iconUI5 = this.getIconInfo(icon);
      if (iconUI5) {
        oIcon.style.fontFamily = iconUI5.fontFamily;
        oIcon.setAttribute('data-sap-ui-icon-content', iconUI5.content);
      }
    }

    return oIcon;
  }

  createBody() {
    const oBody = document.createElement('div');
    oBody.classList.add('Body');

    const sTitle = this.getTitle();
    if (sTitle) {
      const oTitle = document.createElement('h1');
      oTitle.classList.add('Title');
      oTitle.classList.add('sapMTitle');
      oTitle.classList.add('sapMTitleStyleH4');
      oTitle.setAttribute('title', sTitle);
      oTitle.innerText = sTitle;
      oBody.append(oTitle);
    }

    const sText = this.getText();
    const oText = document.createElement('span');
    oText.classList.add('Message');
    oText.classList.add('sapMLabel');

    const iMaxLines = this.getMaxLines();
    oText.style.webkitLineClamp = `${iMaxLines}`;
    oText.setAttribute('title', sText);
    oText.innerText = sText;
    oBody.append(oText);

    return oBody;
  }

  createProgress() {
    let oProgress;
    const duration = this.getDuration();
    const showLoadBar = this.getShowLoadBar();

    if (duration > 0 && showLoadBar) {
      let loaderDuration = duration - 250;
      if (loaderDuration < 0) loaderDuration = 0;

      oProgress = document.createElement('div');
      oProgress.classList.add('Progress');

      const oLoader = document.createElement('div');
      oLoader.classList.add('Loader');
      oLoader.style.animationDuration = `${loaderDuration}ms`;
      oProgress.append(oLoader);
    }
    return oProgress;
  }

  createClose() {
    const showClose = this.getShowClose();
    const duration = this.getDuration();

    let oClose;
    if (showClose || duration <= 0) {
      oClose = document.createElement('span');
      oClose.classList.add('Close');
      oClose.classList.add('sapUiIcon');
      oClose.classList.add('sapUiIconPointer');

      const sIcon = this.getIconClose();
      const iconUI5 = this.getIconInfo(sIcon);
      oClose.setAttribute('data-sap-ui-icon-content', iconUI5.content);
      oClose.style.fontFamily = iconUI5.fontFamily;

      oClose.addEventListener('click', () => {
        this.close();
      });
    }

    return oClose;
  }

  setContent(oContent: HTMLLIElement) {
    this.oContent = oContent;
    return this;
  }

  getContent() {
    return this.oContent;
  }

  createULArea() {
    const oGlobalStatic = sap.ui.getCore().getStaticAreaRef();

    let oNotifications = document.getElementById(NOTIFICATIONS_ID);
    if (!oNotifications) {
      oNotifications = document.createElement('ul');
      oNotifications.id = NOTIFICATIONS_ID;
      oNotifications.classList.add('Notifications');

      oGlobalStatic.append(oNotifications);
    }
    return oNotifications;
  }

  cleanULArea() {
    const oNotifications = document.getElementById(NOTIFICATIONS_ID);
    if (oNotifications && !oNotifications.hasChildNodes()) {
      oNotifications.remove();
    }
  }

  setDuration(duration: number) {
    if (duration > 0 && duration < MIN_DURATION) duration = MIN_DURATION;
    this.setProperty('duration', duration);
  }

  getIconInfo(iconName: string) {
    return IconPool.getIconInfo(iconName) as IconInfo;
  }

  private wait(milliseconds = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
}
