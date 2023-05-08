const Awaiter = {
  /**
   * Awaits the specified time in milliseconds
   * @param milliseconds Milliseconds to wait
   * @returns A promise resolved by setTimeout after the specified milliseconds
   */
  wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds ?? 0);
    });
  },

  /**
   * Awaits 0 milliseconds
   * @returns A promise resolved by setTimeout after 0 milliseconds
   */
  tick() {
    return this.wait(0);
  }
};

export default Awaiter;
