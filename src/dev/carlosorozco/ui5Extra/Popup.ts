import { State } from './library';
import ManagedObject from 'sap/ui/base/ManagedObject';
import Awaiter from './util/Awaiter';
import Icon from './util/Icon';

const NOTIFICATIONS_ID = 'ui5Extra-notifications';
const MIN_DURATION = 1000;

/**
 * @namespace dev.carlosorozco.ui5Extra
 */
export default class Popup extends ManagedObject {
  constructor(id?: string | $PopupSettings);
  constructor(id?: string, settings?: $PopupSettings);
  constructor(id?: string, settings?: $PopupSettings) {
    super(id, settings);
  }

  static readonly metadata: object = {
    library: 'dev.carlosorozco.ui5Extra',
    properties: {
      title: {
        type: 'string',
        group: 'Appearance',
        defaultValue: ''
      },
      text: {
        type: 'string',
        group: 'Appearance',
        defaultValue: ''
      },
      maxLines: {
        type: 'int',
        group: 'Appearance',
        defaultValue: 3
      },
      duration: {
        type: 'int',
        group: 'Appearance',
        defaultValue: 3000
      },
      state: {
        type: 'dev.carlosorozco.ui5Extra.State',
        group: 'Misc',
        defaultValue: State.None
      },
      showLoader: {
        type: 'boolean',
        group: 'Appearance',
        defaultValue: true
      },
      showClose: {
        type: 'boolean',
        group: 'Appearance',
        defaultValue: true
      },
      icon: { type: 'sap.ui.core.URI', group: 'Data', defaultValue: null },
      iconClose: { type: 'sap.ui.core.URI', group: 'Data', defaultValue: 'sap-icon://decline' },
      y: {
        type: 'int',
        group: 'Appearance',
        defaultValue: 0
      }
    },
    events: {
      onClose: {}
    }
  };

  oContent?: HTMLLIElement;
  resolver?: (value?: unknown) => unknown;
  _closeTimeout?: ReturnType<typeof setTimeout>;

  async show() {
    const oPopup = this.createPopup();
    this.setContent(oPopup);

    const oStaticArea = this.createStaticArea();

    const oDom = this.getDom();
    if (!oDom) throw Error('No static area created');
    oDom.appendTo(oStaticArea);

    await Awaiter.tick();
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
    await Awaiter.wait(50);
    oPopup.classList.remove('show');
    await Awaiter.wait(250);

    if (this.resolver) {
      this.fireOnClose();
      this.resolver();
    }

    clearTimeout(this._closeTimeout);
    oPopup.remove();
    this.destroy(true);
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

      const iconUI5 = Icon.getIconInfo(icon);
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
    const showLoader = this.getShowLoader();

    if (duration > 0 && showLoader) {
      let loaderDuration = duration - 250;
      if (loaderDuration < 0) loaderDuration = 0;

      oProgress = document.createElement('div');
      oProgress.classList.add('Progress');

      const oLoader = document.createElement('div');
      oLoader.classList.add('Loader');
      oLoader.style.transitionDuration = `${loaderDuration}ms`;
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
      const iconUI5 = Icon.getIconInfo(sIcon);
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

  getDom() {
    let $ContentRef;
    if (this.oContent) {
      $ContentRef = jQuery(this.oContent);
    }

    return $ContentRef;
  }

  createStaticArea() {
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

  setDuration(duration: number) {
    if (duration > 0 && duration < MIN_DURATION) duration = MIN_DURATION;
    this.setProperty('duration', duration);
  }
}
