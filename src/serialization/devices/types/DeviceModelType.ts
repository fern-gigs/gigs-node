/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const DeviceModelType: core.schemas.Schema<serializers.DeviceModelType.Raw, GigsGigsCoreApi.DeviceModelType> =
  core.schemas.enum_([
    "car",
    "iot",
    "laptop",
    "router",
    "smartphone",
    "feature_phone",
    "smartwatch",
    "tablet",
    "wearable",
    "other",
  ]);

export declare namespace DeviceModelType {
  type Raw =
    | "car"
    | "iot"
    | "laptop"
    | "router"
    | "smartphone"
    | "feature_phone"
    | "smartwatch"
    | "tablet"
    | "wearable"
    | "other";
}
