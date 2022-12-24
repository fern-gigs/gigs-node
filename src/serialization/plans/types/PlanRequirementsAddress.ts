/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const PlanRequirementsAddress: core.schemas.Schema<
  serializers.PlanRequirementsAddress.Raw,
  GigsApi.PlanRequirementsAddress
> = core.schemas.enum_(["none", "present", "verified"]);

export declare namespace PlanRequirementsAddress {
  type Raw = "none" | "present" | "verified";
}