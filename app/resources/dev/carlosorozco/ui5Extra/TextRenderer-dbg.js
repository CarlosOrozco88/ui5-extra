sap.ui.define(["sap/ui/core/library", "sap/m/library", "sap/m/HyphenationSupport", "sap/ui/core/Core", "sap/ui/core/Renderer"], function (sap_ui_core_library, sap_m_library, HyphenationSupport, Core, Renderer) {
  // @ts-ignore
  const TextDirection = sap_ui_core_library["TextDirection"];
  const EmptyIndicatorMode = sap_m_library["EmptyIndicatorMode"];
  const WrappingType = sap_m_library["WrappingType"]; // @ts-ignore
  const oRb = Core.getLibraryResourceBundle('sap.m');

  /**
   * @private
   */
  const TextRenderer = {
    apiVersion: 2,
    render: function (oRm, oText) {
      // get control values
      const sWidth = oText.getWidth();
      const sText = oText.getText(true);
      const sTextDir = oText.getTextDirection();
      const sTooltip = oText.getTooltip_AsString();
      const nMaxLines = oText.getMaxLines();
      const bWrapping = oText.getWrapping();
      const sWrappingType = oText.getWrappingType();
      let sTextAlign = oText.getTextAlign();
      const bRenderWhitespace = oText.getRenderWhitespace();

      // start writing html
      oRm.openStart('span', oText);
      oRm.class('sapMText');
      oRm.class('sapUiSelectable');
      if (oText.hasMaxLines()) {
        oRm.class('sapMTextMaxLineWrapper');
      }

      // set classes for wrapping
      if (!bWrapping || nMaxLines == 1) {
        oRm.class('sapMTextNoWrap');
      } else if (bWrapping && sWrappingType !== WrappingType.Hyphenated) {
        // no space text must break
        if (sText && sText.length > 0 && !/\s/.test(sText)) {
          oRm.class('sapMTextBreakWord');
        }
      }

      // write style and attributes
      sWidth ? oRm.style('width', sWidth) : oRm.class('sapMTextMaxWidth');
      oRm.attr('dir', sTextDir !== TextDirection.Inherit ? sTextDir.toLowerCase() : 'auto');
      sTooltip && oRm.attr('title', sTooltip);
      if (sTextAlign) {
        // @ts-ignore
        sTextAlign = Renderer.getTextAlign(sTextAlign, sTextDir);
        if (sTextAlign) {
          oRm.style('text-align', sTextAlign);
        }
      }
      if (bRenderWhitespace) {
        const whitespaceClass = bWrapping ? 'sapMTextRenderWhitespaceWrap' : 'sapMTextRenderWhitespace';
        oRm.class(whitespaceClass);
      }

      // eslint-disable-next-line
      HyphenationSupport.writeHyphenationClass(oRm, oText);
      oRm.accessibilityState(oText);

      // BEGIN CUSTOM PART
      this.renderCustomPart(oRm, oText);
      // END CUSTOM PART

      // finish writing html
      oRm.openEnd();

      // handle max lines
      if (oText.hasMaxLines()) {
        this.renderMaxLines(oRm, oText);
      } else {
        this.renderText(oRm, oText);
      }

      // finalize
      oRm.close('span');
    },
    renderCustomPart(oRm, oText) {
      const color = oText.getColor();
      const backgroundColor = oText.getBackgroundColor();
      const fontSize = oText.getFontSize();
      const fontWeight = oText.getFontWeight();
      const fontStyle = oText.getFontStyle();
      const cursor = oText.getCursor();
      if (color) oRm.style('color', color);
      if (backgroundColor) oRm.style('background-color', backgroundColor);
      if (fontSize) oRm.style('font-size', fontSize);
      if (fontWeight) oRm.style('font-weight', fontWeight);
      if (fontStyle) oRm.style('font-style', fontStyle);
      if (oText.hasListeners('press')) {
        oRm.style('cursor', 'pointer');
        oRm.attr('tabindex', '0');
      }
      if (cursor) oRm.style('cursor', cursor);
    },
    renderMaxLines: function (oRm, oText) {
      oRm.openStart('span', oText.getId() + '-inner');
      oRm.class('sapMTextMaxLine');

      // check native line clamp support
      if (oText.canUseNativeLineClamp()) {
        oRm.class('sapMTextLineClamp');
        oRm.style('-webkit-line-clamp', oText.getMaxLines());
      }
      oRm.openEnd();
      this.renderText(oRm, oText);
      oRm.close('span');
    },
    renderText: function (oRm, oText) {
      // eslint-disable-next-line
      const sText = HyphenationSupport.getTextForRender(oText, 'main');
      if (typeof oText.getEmptyIndicatorMode === 'function' &&
      // CUSTOM CHECK 1.71 COMPATIBILITY
      oText.getEmptyIndicatorMode() !== EmptyIndicatorMode.Off && !oText.getText(true)) {
        this.renderEmptyIndicator(oRm, oText);
      } else {
        oRm.text(sText);
      }
    },
    renderEmptyIndicator: function (oRm, oText) {
      oRm.openStart('span');
      oRm.class('sapMEmptyIndicator');
      if (oText.getEmptyIndicatorMode() === EmptyIndicatorMode.Auto) {
        oRm.class('sapMEmptyIndicatorAuto');
      }
      oRm.openEnd();
      oRm.openStart('span');
      oRm.attr('aria-hidden', true);
      oRm.openEnd();
      oRm.text(oRb.getText('EMPTY_INDICATOR') ?? '');
      oRm.close('span');
      //Empty space text to be announced by screen readers
      oRm.openStart('span');
      oRm.class('sapUiPseudoInvisibleText');
      oRm.openEnd();
      oRm.text(oRb.getText('EMPTY_INDICATOR_TEXT') ?? '');
      oRm.close('span');
      oRm.close('span');
    }
  };

  /**
   * @private
   */
  return TextRenderer;
});