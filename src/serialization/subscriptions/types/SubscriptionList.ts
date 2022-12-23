/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const SubscriptionList: core.schemas.ObjectSchema<serializers.SubscriptionList.Raw, GigsApi.SubscriptionList> =
  core.schemas.object({
    object: core.schemas.string(),
    items: core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).SubscriptionItem)),
    moreItemsAfter: core.schemas.string().optional(),
    moreItemsBefore: core.schemas.string().optional(),
  });

export declare namespace SubscriptionList {
  interface Raw {
    object: string;
    items: serializers.SubscriptionItem.Raw[];
    moreItemsAfter?: string | null;
    moreItemsBefore?: string | null;
  }
}
