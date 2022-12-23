/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const PlanSmsUnit: core.schemas.Schema<serializers.PlanSmsUnit.Raw, GigsApi.PlanSmsUnit> = core.schemas.enum_([
  "message",
]);

export declare namespace PlanSmsUnit {
  type Raw = "message";
}
