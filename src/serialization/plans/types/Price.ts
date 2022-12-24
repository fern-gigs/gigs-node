/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Price: core.schemas.ObjectSchema<serializers.Price.Raw, GigsApi.Price> = core.schemas.object({
  amount: core.schemas.number(),
  currency: core.schemas.string(),
});

export declare namespace Price {
  interface Raw {
    amount: number;
    currency: string;
  }
}