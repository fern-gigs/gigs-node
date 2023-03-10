/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const PlanSmsUnit: core.schemas.Schema<serializers.PlanSmsUnit.Raw, GigsGigsCoreApi.PlanSmsUnit> =
  core.schemas.enum_(["message"]);

export declare namespace PlanSmsUnit {
  type Raw = "message";
}
