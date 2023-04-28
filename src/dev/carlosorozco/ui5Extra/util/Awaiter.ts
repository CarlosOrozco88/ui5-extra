/**
 * @namespace dev.carlosorozco.ui5Extra.util.Awaiter
 * @public
 */
const Awaiter = {
  wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds ?? 0);
    });
  },

  tick() {
    return this.wait(0);
  }
};

export default Awaiter;
