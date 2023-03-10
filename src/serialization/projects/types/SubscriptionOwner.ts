/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const SubscriptionOwner: core.schemas.Schema<
  serializers.SubscriptionOwner.Raw,
  GigsGigsCoreApi.SubscriptionOwner
> = core.schemas.enum_(["user", "company"]);

export declare namespace SubscriptionOwner {
  type Raw = "user" | "company";
}
