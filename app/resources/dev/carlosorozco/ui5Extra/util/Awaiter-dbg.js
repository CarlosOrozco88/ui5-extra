sap.ui.define([], function () {
  /**
   * @namespace dev.carlosorozco.ui5Extra.util.Awaiter
   * @public
   */
  const Awaiter = {
    wait(milliseconds) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, milliseconds ?? 0);
      });
    },
    tick() {
      return this.wait(0);
    }
  };
  return Awaiter;
});