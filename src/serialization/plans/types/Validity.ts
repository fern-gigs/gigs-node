/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Validity: core.schemas.ObjectSchema<serializers.Validity.Raw, GigsGigsCoreApi.Validity> =
  core.schemas.object({
    minimumPeriods: core.schemas.number(),
    type: core.schemas.lazy(async () => (await import("../..")).ValidityType),
    unit: core.schemas.lazy(async () => (await import("../..")).ValidityUnit),
    value: core.schemas.number(),
  });

export declare namespace Validity {
  interface Raw {
    minimumPeriods: number;
    type: serializers.ValidityType.Raw;
    unit: serializers.ValidityUnit.Raw;
    value: number;
  }
}
