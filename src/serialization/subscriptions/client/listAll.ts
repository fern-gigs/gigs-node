/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Response: core.schemas.Schema<serializers.subscriptions.listAll.Response.Raw, GigsApi.SubscriptionList> =
  core.schemas.lazyObject(async () => (await import("../..")).SubscriptionList);

export declare namespace Response {
  type Raw = serializers.SubscriptionList.Raw;
}
