/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const DeviceId: core.schemas.Schema<serializers.DeviceId.Raw, GigsGigsCoreApi.DeviceId> = core.schemas.string();

export declare namespace DeviceId {
  type Raw = string;
}
