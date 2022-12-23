/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Subscription: core.schemas.ObjectSchema<serializers.Subscription.Raw, GigsApi.Subscription> =
  core.schemas.object({
    object: core.schemas.lazy(async () => (await import("../..")).SubscriptionObject),
    id: core.schemas.string(),
    currentPeriod: core.schemas.lazyObject(async () => (await import("../..")).CurrentPeriod).optional(),
    phoneNumber: core.schemas.string(),
    plan: core.schemas.lazyObject(async () => (await import("../..")).Plan),
    porting: core.schemas.string().optional(),
    sim: core.schemas.lazyObject(async () => (await import("../..")).Sim).optional(),
    status: core.schemas.lazy(async () => (await import("../..")).SubscriptionStatus),
    user: core.schemas.lazyObject(async () => (await import("../..")).User),
    activatedAt: core.schemas.date(),
    canceledAt: core.schemas.date(),
    createdAt: core.schemas.date(),
    endedAt: core.schemas.date(),
    firstUsageAt: core.schemas.date(),
  });

export declare namespace Subscription {
  interface Raw {
    object: serializers.SubscriptionObject.Raw;
    id: string;
    currentPeriod?: serializers.CurrentPeriod.Raw | null;
    phoneNumber: string;
    plan: serializers.Plan.Raw;
    porting?: string | null;
    sim?: serializers.Sim.Raw | null;
    status: serializers.SubscriptionStatus.Raw;
    user: serializers.User.Raw;
    activatedAt: string;
    canceledAt: string;
    createdAt: string;
    endedAt: string;
    firstUsageAt: string;
  }
}
