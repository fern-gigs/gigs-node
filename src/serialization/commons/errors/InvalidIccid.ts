/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const InvalidIccid: core.schemas.Schema<serializers.InvalidIccid.Raw, GigsGigsCoreApi.InvalidIccid> =
  core.schemas.lazyObject(async () => (await import("../..")).InvalidIccidBody);

export declare namespace InvalidIccid {
  type Raw = serializers.InvalidIccidBody.Raw;
}
