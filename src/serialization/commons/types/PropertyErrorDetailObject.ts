/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const PropertyErrorDetailObject: core.schemas.Schema<
  serializers.PropertyErrorDetailObject.Raw,
  GigsGigsCoreApi.PropertyErrorDetailObject
> = core.schemas.enum_(["propertyErrorDetail"]);

export declare namespace PropertyErrorDetailObject {
  type Raw = "propertyErrorDetail";
}
