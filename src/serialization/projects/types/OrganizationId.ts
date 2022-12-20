/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const OrganizationId: core.schemas.Schema<serializers.OrganizationId.Raw, GigsApi.OrganizationId> =
  core.schemas.string();

export declare namespace OrganizationId {
  type Raw = string;
}
