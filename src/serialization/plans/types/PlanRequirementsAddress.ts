/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const PlanRequirementsAddress: core.schemas.Schema<
  serializers.PlanRequirementsAddress.Raw,
  GigsGigsCoreApi.PlanRequirementsAddress
> = core.schemas.enum_(["none", "present", "verified"]);

export declare namespace PlanRequirementsAddress {
  type Raw = "none" | "present" | "verified";
}
