/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Organization: core.schemas.ObjectSchema<serializers.Organization.Raw, GigsApi.Organization> =
  core.schemas.object({
    object: core.schemas.string(),
    id: core.schemas.lazy(async () => (await import("../..")).OrganizationId),
    name: core.schemas.string(),
    createdAt: core.schemas.date(),
  });

export declare namespace Organization {
  interface Raw {
    object: string;
    id: serializers.OrganizationId.Raw;
    name: string;
    createdAt: string;
  }
}
