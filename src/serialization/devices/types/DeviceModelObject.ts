/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const DeviceModelObject: core.schemas.Schema<
  serializers.DeviceModelObject.Raw,
  GigsGigsCoreApi.DeviceModelObject
> = core.schemas.enum_(["deviceModel"]);

export declare namespace DeviceModelObject {
  type Raw = "deviceModel";
}
