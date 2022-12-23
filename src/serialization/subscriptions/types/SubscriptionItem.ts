/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const SubscriptionItem: core.schemas.ObjectSchema<serializers.SubscriptionItem.Raw, GigsApi.SubscriptionItem> =
  core.schemas.object({
    object: core.schemas.string(),
    id: core.schemas.lazy(async () => (await import("../..")).SubscriptionId),
    currentPeriod: core.schemas.lazyObject(async () => (await import("../..")).CurrentPeriod).optional(),
    phoneNumber: core.schemas.string(),
    plan: core.schemas.lazyObject(async () => (await import("../..")).Plan),
    porting: core.schemas.string().optional(),
    sim: core.schemas.lazyObject(async () => (await import("../..")).Sim),
    status: core.schemas.lazy(async () => (await import("../..")).SubscriptionStatus),
    user: core.schemas.lazyObject(async () => (await import("../..")).User),
    activatedAt: core.schemas.date(),
    canceledAt: core.schemas.date(),
    createdAt: core.schemas.date(),
    endedAt: core.schemas.date(),
    firstUsageAt: core.schemas.date(),
  });

export declare namespace SubscriptionItem {
  interface Raw {
    object: string;
    id: serializers.SubscriptionId.Raw;
    currentPeriod?: serializers.CurrentPeriod.Raw | null;
    phoneNumber: string;
    plan: serializers.Plan.Raw;
    porting?: string | null;
    sim: serializers.Sim.Raw;
    status: serializers.SubscriptionStatus.Raw;
    user: serializers.User.Raw;
    activatedAt: string;
    canceledAt: string;
    createdAt: string;
    endedAt: string;
    firstUsageAt: string;
  }
}
