/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Project: core.schemas.ObjectSchema<serializers.Project.Raw, GigsGigsCoreApi.Project> = core.schemas.object(
  {
    object: core.schemas.string(),
    id: core.schemas.lazy(async () => (await import("../..")).ProjectId),
    image: core.schemas.string().optional(),
    legal: core.schemas.lazyObject(async () => (await import("../..")).LegalAddress).optional(),
    locales: core.schemas.list(core.schemas.string()),
    name: core.schemas.string(),
    organization: core.schemas.lazyObject(async () => (await import("../..")).Organization),
    payments: core.schemas.lazyObject(async () => (await import("../..")).Payments),
    subscriptionOwner: core.schemas.lazy(async () => (await import("../..")).SubscriptionOwner),
    support: core.schemas.lazyObject(async () => (await import("../..")).Support).optional(),
    createdAt: core.schemas.date(),
  }
);

export declare namespace Project {
  interface Raw {
    object: string;
    id: serializers.ProjectId.Raw;
    image?: string | null;
    legal?: serializers.LegalAddress.Raw | null;
    locales: string[];
    name: string;
    organization: serializers.Organization.Raw;
    payments: serializers.Payments.Raw;
    subscriptionOwner: serializers.SubscriptionOwner.Raw;
    support?: serializers.Support.Raw | null;
    createdAt: string;
  }
}
