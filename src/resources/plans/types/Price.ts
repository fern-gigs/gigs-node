/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Price {
  /** The price amount in the currency's minor unit, e.g. "cents" for many currencies. `>= 0` */
  amount: number;
  /** Three-letter ISO 4217 currency code. Must be a supported currency. */
  currency: string;
}