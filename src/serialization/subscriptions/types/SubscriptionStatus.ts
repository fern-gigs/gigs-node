/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const SubscriptionStatus: core.schemas.Schema<serializers.SubscriptionStatus.Raw, GigsApi.SubscriptionStatus> =
  core.schemas.enum_(["pending", "active", "ended"]);

export declare namespace SubscriptionStatus {
  type Raw = "pending" | "active" | "ended";
}
