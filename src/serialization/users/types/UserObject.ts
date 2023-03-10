/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const UserObject: core.schemas.Schema<serializers.UserObject.Raw, GigsGigsCoreApi.UserObject> =
  core.schemas.enum_(["user"]);

export declare namespace UserObject {
  type Raw = "user";
}
