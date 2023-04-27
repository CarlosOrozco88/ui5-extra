/**
 * @namespace dev.carlosorozco.ui5Extra.util.Awaiter
 */
export default {
  wait(ms = 0): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },

  tick() {
    return this.wait(0);
  }
};
