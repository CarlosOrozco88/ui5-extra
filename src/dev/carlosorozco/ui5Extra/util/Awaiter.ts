/**
 * @namespace dev.carlosorozco.ui5Extra.util.Awaiter
 * @public
 */
const Awaiter = {
  /**
   * @public
   */
  wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds ?? 0);
    });
  },

  /**
   * @public
   */
  tick() {
    return this.wait(0);
  }
};

export default Awaiter;
