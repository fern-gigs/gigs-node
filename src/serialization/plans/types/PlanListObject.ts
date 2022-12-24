/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const PlanListObject: core.schemas.Schema<serializers.PlanListObject.Raw, GigsApi.PlanListObject> =
  core.schemas.enum_(["list"]);

export declare namespace PlanListObject {
  type Raw = "list";
}