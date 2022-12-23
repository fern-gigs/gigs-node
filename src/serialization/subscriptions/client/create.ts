/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Request: core.schemas.Schema<
  serializers.subscriptions.create.Request.Raw,
  GigsApi.CreateSubscriptionRequest
> = core.schemas.object({
  plan: core.schemas.string(),
  sim: core.schemas.string().optional(),
  userAddress: core.schemas.string().optional(),
  user: core.schemas.string(),
  porting: core.schemas.string().optional(),
});

export declare namespace Request {
  interface Raw {
    plan: string;
    sim?: string | null;
    userAddress?: string | null;
    user: string;
    porting?: string | null;
  }
}

export const Response: core.schemas.Schema<serializers.subscriptions.create.Response.Raw, GigsApi.Subscription> =
  core.schemas.lazyObject(async () => (await import("../..")).Subscription);

export declare namespace Response {
  type Raw = serializers.Subscription.Raw;
}
