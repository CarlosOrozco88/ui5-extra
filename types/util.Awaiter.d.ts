declare module 'dev/carlosorozco/ui5Extra/util/Awaiter' {
  /**
   * @static
   * @namespace dev.carlosorozco.ui5Extra
   */
  namespace Awaiter {
    export function tick(): Promise<void>;
    export function wait(milliseconds: number): Promise<void>;
  }
  export default Awaiter;
}
