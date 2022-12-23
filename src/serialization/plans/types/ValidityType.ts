/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const ValidityType: core.schemas.Schema<serializers.ValidityType.Raw, GigsApi.ValidityType> = core.schemas.enum_(
  ["oneTime", "recurring"]
);

export declare namespace ValidityType {
  type Raw = "oneTime" | "recurring";
}
