/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const InvalidIccidBodyObject: core.schemas.Schema<
  serializers.InvalidIccidBodyObject.Raw,
  GigsGigsCoreApi.InvalidIccidBodyObject
> = core.schemas.enum_(["error"]);

export declare namespace InvalidIccidBodyObject {
  type Raw = "error";
}
