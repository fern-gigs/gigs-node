/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const PlanRequirements: core.schemas.ObjectSchema<
  serializers.PlanRequirements.Raw,
  GigsGigsCoreApi.PlanRequirements
> = core.schemas.object({
  address: core.schemas.lazy(async () => (await import("../..")).PlanRequirementsAddress),
  device: core.schemas.lazy(async () => (await import("../..")).PlanRequirementsDevice),
  userBirthday: core.schemas.property(
    "user.birthday",
    core.schemas.lazy(async () => (await import("../..")).PlanRequirementsUserBirthday)
  ),
  userFullName: core.schemas.property(
    "user.fullName",
    core.schemas.lazy(async () => (await import("../..")).PlanRequirementsUserFullName)
  ),
});

export declare namespace PlanRequirements {
  interface Raw {
    address: serializers.PlanRequirementsAddress.Raw;
    device: serializers.PlanRequirementsDevice.Raw;
    "user.birthday": serializers.PlanRequirementsUserBirthday.Raw;
    "user.fullName": serializers.PlanRequirementsUserFullName.Raw;
  }
}
