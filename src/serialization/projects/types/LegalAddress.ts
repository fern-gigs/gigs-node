/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const LegalAddress: core.schemas.ObjectSchema<serializers.LegalAddress.Raw, GigsApi.LegalAddress> =
  core.schemas.object({
    name: core.schemas.string(),
    city: core.schemas.string(),
    country: core.schemas.string(),
    line1: core.schemas.string(),
    line2: core.schemas.string(),
    postalCode: core.schemas.string(),
    state: core.schemas.string(),
  });

export declare namespace LegalAddress {
  interface Raw {
    name: string;
    city: string;
    country: string;
    line1: string;
    line2: string;
    postalCode: string;
    state: string;
  }
}