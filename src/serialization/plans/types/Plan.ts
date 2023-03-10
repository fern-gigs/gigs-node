/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export const Plan: core.schemas.ObjectSchema<serializers.Plan.Raw, GigsGigsCoreApi.Plan> = core.schemas.object({
  object: core.schemas.lazy(async () => (await import("../..")).PlanObject),
  id: core.schemas.lazy(async () => (await import("../..")).PlanId),
  coverage: core.schemas.lazyObject(async () => (await import("../..")).Coverage),
  data: core.schemas.number(),
  dataUnit: core.schemas.lazy(async () => (await import("../..")).DataUnit),
  description: core.schemas.string().optional(),
  image: core.schemas.string(),
  name: core.schemas.string(),
  price: core.schemas.lazyObject(async () => (await import("../..")).Price),
  provider: core.schemas.string(),
  requirements: core.schemas.lazyObject(async () => (await import("../..")).PlanRequirements),
  simTypes: core.schemas.list(core.schemas.lazy(async () => (await import("../..")).SimTypes)),
  sms: core.schemas.number(),
  smsUnit: core.schemas.lazy(async () => (await import("../..")).PlanSmsUnit),
  status: core.schemas.lazy(async () => (await import("../..")).PlanStatus),
  tags: core.schemas.list(core.schemas.string()),
  validity: core.schemas.lazyObject(async () => (await import("../..")).Validity),
  voice: core.schemas.number(),
  voiceUnit: core.schemas.lazy(async () => (await import("../..")).VoiceUnit),
  createdAt: core.schemas.date(),
});

export declare namespace Plan {
  interface Raw {
    object: serializers.PlanObject.Raw;
    id: serializers.PlanId.Raw;
    coverage: serializers.Coverage.Raw;
    data: number;
    dataUnit: serializers.DataUnit.Raw;
    description?: string | null;
    image: string;
    name: string;
    price: serializers.Price.Raw;
    provider: string;
    requirements: serializers.PlanRequirements.Raw;
    simTypes: serializers.SimTypes.Raw[];
    sms: number;
    smsUnit: serializers.PlanSmsUnit.Raw;
    status: serializers.PlanStatus.Raw;
    tags: string[];
    validity: serializers.Validity.Raw;
    voice: number;
    voiceUnit: serializers.VoiceUnit.Raw;
    createdAt: string;
  }
}
